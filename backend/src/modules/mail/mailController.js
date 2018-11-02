import { mailer } from '../../services/mail/mailer';

export const mailController = async (req, res) => {
  // let xxx = ;
  return res.json(
    mailer({
      to: 'netrh.j@seznam.cz',
      name: 'Jakub Netrh',
      tokenUrl: 'localhost:3000/hello',
      template: 'helloToken',
    })
  );
};
