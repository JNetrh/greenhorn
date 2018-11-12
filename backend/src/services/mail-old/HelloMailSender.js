const Email = require('email-templates');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('file-system');

dotenv.config();

module.exports = class HelloMailSender {
  constructor(mailer) {
    this.mailer = mailer;
    // this.email = new Email({
    //   message: {
    //     from: process.env.SMTP_EMAIL,
    //   },
    //   // uncomment below to send emails in development/test env:
    //   send: true,
    //   transport: mailer,
    //   views: {
    //     options: {
    //       extension: 'ejs',
    //     },
    //   },
    // });
  }

  async send(email_, name, tokenUrl) {
    const email = new Email({
      message: {
        from: process.env.SMTP_EMAIL,
      },
      // uncomment below to send emails in development/test env:
      send: true,
      transport: this.mailer,
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
  }
};
