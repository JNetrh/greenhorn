const nodemailer = require('nodemailer');
const Email = require('email-templates');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

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
console.log(options);

const email = new Email({
  message: {
    from: process.env.SMTP_EMAIL,
  },
  // uncomment below to send emails in development/test env:
  send: true,
  transport: nodemailer.createTransport(options),
  views: {
    options: {
      extension: 'ejs',
    },
  },
});

email
  .send({
    template: 'helloToken',
    message: {
      to: 'netrh.j@seznam.cz',
      subject: 'Welcome in greenhorn app',
      name: 'jakub',
      username: 'jakub',
      token: 'localhost:3000',
    },
    locals: {
      to: 'netrh.j@seznam.cz',
      subject: 'Welcome in greenhorn app',
      name: 'jakub',
      username: 'jakub',
      token: 'localhost:3000',
    },
  })
  .then(console.log)
  .catch(console.error);
