import sgMail from './mailer';

export const addUserMail = async (createdUser, invitationToken) => {
  try {
    const msg = {
      to: createdUser.email,
      from: 'noreply@rostaklein.cz',
      subject: 'Welcome to CNGroup!',
      templateId: 'd-b0a427f7622942d2b8e2b7c5a03a4e6b',
      dynamic_template_data: {
        token: invitationToken,
      },
    };
    const mailRes = await sgMail.send(msg);
    return mailRes;
  } catch (error) {
    console.error(error);
    return error;
  }
};
