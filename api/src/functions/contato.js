// Contact form endpoint (POST /api/contato), moved from the Next.js API route when the site
// became a static export on Azure Static Web Apps. Same contract: { subject, msg } in, 200 on send.
// Sends through Microsoft Graph with the app registration in EMAIL_SERVICE_* (client credentials):
// Exchange Online no longer accepts the SMTP password login the site used before.
const { app } = require("@azure/functions");

const MAX_BODY_BYTES = 20000;

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

async function sendEmail(subject, msg, token) {
  const mailbox = process.env.EMAIL_SERVICE_FROM;
  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: "HTML", content: msg },
        toRecipients: [{ emailAddress: { address: mailbox } }],
      },
      saveToSentItems: false,
    }),
  });
  if (!response.ok) {
    throw new Error(`Graph sendMail respondeu ${response.status}`);
  }
}

app.http("contato", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "contato",
  handler: async (request, context) => {
    if (request.method !== "POST") {
      return { status: 405, jsonBody: { error: "405 Method Not Allowed" } };
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return { status: 413, jsonBody: { error: "Mensagem muito grande" } };
    }

    let subject;
    let msg;
    try {
      ({ subject, msg } = JSON.parse(raw));
    } catch {
      return { status: 400, jsonBody: { error: "JSON inválido" } };
    }
    if (typeof subject !== "string" || typeof msg !== "string" || !subject || !msg) {
      return { status: 400, jsonBody: { error: "Assunto e mensagem são obrigatórios" } };
    }

    try {
      const token = await getToken();
      await sendEmail(subject, msg, token);
      return { status: 200, jsonBody: { mensagem: "E-mail enviado com sucesso" } };
    } catch (error) {
      context.error(`Sending failed: ${error.message}`);
      return { status: 500, jsonBody: { error: "Falha ao enviar o e-mail" } };
    }
  },
});
