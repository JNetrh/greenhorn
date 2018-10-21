import { mail } from '../../services/mail/mailer';

export const mailController = async (req, res) => {
  const message = {
    subject: 'Ahoj',
    html: '<b>Ahoj</b>',
    to: 'netrh.j@seznam.cz',
  };

  let xxx = await mail(message);
  return res.json({ xxx });
};
