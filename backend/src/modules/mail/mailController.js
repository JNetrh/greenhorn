// import { mailer } from '../../services/mail/mailer';
import mailer from '../../services/mail/mailer';

export const mailController = async (req, res) => {
  const msg = {
    to: 'rostaklein@gmail.com',
    from: 'rostaklein@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  const mailRes = await mailer.send(msg);
  // let xxx = ;
  return res.json({ msg, mailRes });
};
