'use strict';
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

let transporter;

const initTransporter = async () => {
  if (transporter) return transporter;
  return await nodemailer.createTransport(options);
};

const testMail = async () => {
  try {
    let mailer = await initTransporter();

    mailer.verify((error, success) => {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log('Server is ready to take our messages');
        return success;
      }
    });
  } catch (error) {
    return error;
  }
};

const mail = async message => {
  try {
    let mailer = await initTransporter();
    message = processMessage(message);
    console.log(message);
    mailer.sendMail(message, (error, info) => {
      if (error) {
        console.log(error);
        return error;
      }
      return message;
    });
  } catch (error) {
    return error;
  }
};

// -- helpers -- //

const processMessage = message => {
  const { SMTP_EMAIL } = process.env;
  if (!message.hasOwnProperty('to')) return { error: 'unknown recepient' };
  const mustr = {
    subject: '',
    text: '',
    html: '',
    from: SMTP_EMAIL,
    to: '',
  };
  const envelope = {
    envelope: {
      from: 'GreenHorn Mailer ' + SMTP_EMAIL,
      to: message.to,
    },
  };

  return Object.assign(Object.assign({}, mustr, message), envelope);
};

module.exports = {
  mail,
  testMail,
};
