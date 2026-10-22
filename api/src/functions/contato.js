// Contact form endpoint (POST /api/contato), moved from the Next.js API route when the site
// became a static export on Azure Static Web Apps. Same contract: { subject, msg } in, 200 on send.
const { app } = require("@azure/functions");
const nodemailer = require("nodemailer");

const MAX_BODY_BYTES = 20000;

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
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PSW },
        tls: { ciphers: "SSLv3" },
      });
      const from = process.env.MAIL_FROM;
      const info = await transporter.sendMail({ from, to: from, subject, html: msg });
      context.log(`Message sent: ${info.messageId}`);
      return { status: 200, jsonBody: { mensagem: "E-mail enviado com sucesso" } };
    } catch (error) {
      context.error(`Sending failed: ${error.message}`);
      return { status: 500, jsonBody: { error: "Falha ao enviar o e-mail" } };
    }
  },
});
