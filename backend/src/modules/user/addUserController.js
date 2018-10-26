import { User } from '../../models/';
import { createInvitation } from './InvitationController';

const getUserByEmail = async email => {
  //TODO find in DB
  const user = User.findOne({ where: { email } });
  return user;
};

const addUserController = async (req, res) => {
  const { name, surname, email } = req.body;
  try {
    if (!name || !surname || !email) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory parameter.' });
    }
    const user = await getUserByEmail(email);
    if (user) {
      return res.status(404).json({ msg: `User already exists: ${email}` });
    }

    // const invitation = await Invitation.create();

    const createdUser = await User.create({
      name,
      surname,
      email,
    });

    await createInvitation(createdUser.id);

    return res.json(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addUserController;
