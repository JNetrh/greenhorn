import { getUserByEmail } from '../user/addUserController';

const ForgotPasswordController = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: 'Please fill your email address.' });
  }
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `No user found with the email: ${email}` });
    }
    //TODO send email with reset instructions
    return res.json({
      msg:
        'Password change requested. Please follow the instructions sent to your email.',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

export default ForgotPasswordController;
