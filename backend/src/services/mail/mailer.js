'use strict';
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
// const HelloMailSender = require('./HelloMailSender');

dotenv.config();

// const options = {
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: process.env.SMTP_SECURE,
//   auth: {
//     user: process.env.SMTP_USERNAME,
//     pass: process.env.SMTP_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// };

const options = {
  host: 'smtp.jakub-netrh.cz',
  port: 465,
  secure: true,
  auth: {
    user: 'email@jakub-netrh.cz',
    pass: 'ff92af89',
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const mailer = (async ({ template, to, tokenUrl, name }) => {
  transporter = await nodemailer.createTransport(options);
  const email = new Email({
    message: {
      from: process.env.SMTP_EMAIL,
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport: transporter,
    views: {
      options: {
        extension: 'ejs',
      },
    },
  });
  return async () => {
    try {
      return await email.send({
        template: template,
        message: {
          to: to,
          subject: 'Welcome in greenhorn app',
          name: name,
          username: 'jakub',
          token: TokenUrl,
        },
        locals: {
          to: to,
          subject: 'Welcome in greenhorn app',
          name: name,
          username: 'jakub',
          token: tokenUrl,
        },
      });
    } catch (error) {
      return error;
    }
  };
})();

// const helloMail = async (email, name, tokenUrl) => {
//   try {
//     const mailTransport = await nodemailer.createTransport(options);
//     const helloMail = new HelloMailSender(mailTransport);
//     return await helloMail.send(email, name, tokenUrl);
//   } catch (error) {
//     console.log(error);
//     return { error };
//   }
// };

module.exports = {
  mailer,
};
