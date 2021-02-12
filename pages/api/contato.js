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

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secureConnection: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PSW, // generated ethereal password
    },
    tls: { ciphers: 'SSLv3' }
  });

  const email = process.env.FROM;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: msg, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}