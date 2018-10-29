import { mail } from '../../services/mail/mailer';
const fs = require('fs');
var template = fs.readFileSync('./src/mockups/email_hello.html', 'utf8');

export const mailController = async (req, res) => {
  const message = {
    subject: 'Ahoj',
    html: template,
    to: 'netrh.j@seznam.cz',
  };

  let xxx = await mail(message);
  return res.json({ xxx });
};
