// Contact form endpoint (POST /api/contato) for the static site on Azure Static Web Apps.
// Accepts the form fields as JSON (the page's script) or as a regular form post (browsers without
// JavaScript), builds the e-mail here with every value HTML-escaped, and sends it through Microsoft
// Graph with the app registration in EMAIL_SERVICE_* (client credentials): Exchange Online no longer
// accepts the SMTP password login the site used before.
const { app } = require("@azure/functions");

const MAX_BODY_BYTES = 20000;
const FIELDS = [
  ["nome", "Nome", 120],
  ["email", "E-mail", 160],
  ["empresa", "Empresa", 160],
  ["telefone", "Telefone", 40],
  ["assunto", "Assunto", 160],
  ["mensagem", "Mensagem", 5000],
];
// Where a browser without JavaScript lands after posting the form.
const THANK_YOU_PATH = process.env.CONTACT_THANK_YOU_PATH || "/contato/obrigado";
const SUBJECT_PREFIX = process.env.CONTACT_SUBJECT_PREFIX || "Contato pelo site";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value, max) {
  return typeof value === "string" ? value.replace(/\r\n?/g, "\n").trim().slice(0, max) : "";
}

function parse(raw, contentType) {
  if (contentType.includes("application/x-www-form-urlencoded")) {
    return { data: Object.fromEntries(new URLSearchParams(raw)), isForm: true };
  }
  return { data: JSON.parse(raw), isForm: false };
}

function validate(data) {
  const values = Object.fromEntries(FIELDS.map(([key, , max]) => [key, clean(data[key], max)]));
  const missing = ["nome", "email", "telefone", "assunto"].filter((key) => !values[key]);
  if (missing.length) return { error: `Preencha: ${missing.join(", ")}` };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return { error: "E-mail inválido" };
  return { values };
}

function buildMessage(values) {
  const rows = FIELDS.filter(([key]) => values[key])
    .map(([key, label]) => `<p><b>${label}:</b> ${escapeHtml(values[key]).replace(/\n/g, "<br>")}</p>`)
    .join("\n");
  return { subject: `${SUBJECT_PREFIX}: ${values.assunto}`, html: rows };
}

async function getToken() {
  const tenantId = process.env.EMAIL_SERVICE_TENANT_ID;
  const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.EMAIL_SERVICE_CLIENT_ID,
      client_secret: process.env.EMAIL_SERVICE_CLIENT_SECRET,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  if (!response.ok) {
    throw new Error(`Falha ao obter token de acesso (${response.status})`);
  }
  return (await response.json()).access_token;
}

async function sendEmail({ subject, html }, replyTo, token) {
  const mailbox = process.env.EMAIL_SERVICE_FROM;
  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: "HTML", content: html },
        toRecipients: [{ emailAddress: { address: mailbox } }],
        replyTo: [{ emailAddress: { address: replyTo } }],
      },
      saveToSentItems: false,
    }),
  });
  if (!response.ok) {
    throw new Error(`Graph sendMail respondeu ${response.status}`);
  }
}

function reply(isForm, status, message) {
  if (isForm) {
    const target = status === 200 ? THANK_YOU_PATH : `${THANK_YOU_PATH}?erro=1`;
    return { status: 303, headers: { Location: target } };
  }
  return { status, jsonBody: status === 200 ? { mensagem: message } : { error: message } };
}

async function handler(request, context) {
  if (request.method !== "POST") {
    return { status: 405, jsonBody: { error: "405 Method Not Allowed" } };
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return { status: 413, jsonBody: { error: "Mensagem muito grande" } };
  }

  let parsed;
  try {
    parsed = parse(raw, request.headers.get("content-type") || "");
  } catch {
    return { status: 400, jsonBody: { error: "JSON inválido" } };
  }
  const { data, isForm } = parsed;
  if (!data || typeof data !== "object") {
    return reply(isForm, 400, "Requisição inválida");
  }

  // Honeypot: people never see this field, so a filled one is a bot. Answer as if it was sent.
  if (clean(data.website, 200)) {
    return reply(isForm, 200, "E-mail enviado com sucesso");
  }

  const { values, error } = validate(data);
  if (error) return reply(isForm, 400, error);

  try {
    const token = await getToken();
    await sendEmail(buildMessage(values), values.email, token);
    return reply(isForm, 200, "E-mail enviado com sucesso");
  } catch (err) {
    context.error(`Sending failed: ${err.message}`);
    return reply(isForm, 500, "Falha ao enviar o e-mail");
  }
}

app.http("contato", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "contato",
  handler,
});

module.exports = { handler, escapeHtml, validate, buildMessage };
