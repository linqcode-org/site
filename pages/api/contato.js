// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

"use strict";
const nodemailer = require("nodemailer");

export default (req, res) => {

  if(req.method === "POST"){

      const { subject, msg } = req.body;

      main(subject, msg)
      .then(() => {
        res.statusCode = 200;
        res.json({ mensagem: 'E-mail enviado com sucesso' });
      })
      .catch((error) => {

        res.statusCode = 500;
        res.json({ error: error })
      });
  }else{
    res.statusCode = 405;
    res.json({ error: "405 Method Not Allowed" });
  }
}


// async..await is not allowed in global scope, must use a wrapper
async function main(subject, msg) {

  const host  = process.env.MAIL_HOST;
  const port  = process.env.MAIL_PORT;
  const user  = process.env.MAIL_USER;
  const psw   = process.env.MAIL_PSW;
  const from = process.env.MAIL_FROM;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secureConnection: false, // true for 465, false for other ports
    auth: {
      user: user, // generated ethereal user
      pass: psw, // generated ethereal password
    },
    tls: { ciphers: 'SSLv3' }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: from, // sender address
    to: from, // list of receivers
    subject: subject, // Subject line
    html: msg, // html body
  });

  // resposta automática para o cliente.

  

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


const templateEmail = () => `
<div style="color: #191c24; font-family: -apple-system, 'Sarabun', sans-serif; font-size: 18px;">

  <h2>Olá,</h2>
  <p>Agradecemos o seu interesse em nos conhecer, o mais breve entraremos em contato.</p>
  
  <p>--</p>
  <div style="width: 200px">
    <a target="_blank" href="https://www.linqcode.com.br" style="width: 100px">
      <img src="https://site-linqcode.linqcode.vercel.app/logo-black.png" alt="Avatar" width="200px" style="width: 200px; max-width: 200px;">
    </a>
  </div>
  
</div>`