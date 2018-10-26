import { Invitation, User } from '../../models';
import jwt from 'jsonwebtoken';

export const createInvitation = async userId => {
  const invitation = await Invitation.create({
    UserId: userId,
  });

  const token = jwt.sign({ invitationId: invitation.id }, process.env.SECRET);

  const invitationWithToken = await Invitation.update(
    { token },
    {
      where: {
        id: invitation.id,
      },
    }
  );
  return invitationWithToken;
};

export const getUserByInvitationToken = async (req, res) => {
  const { token } = req.params;
  const verified = jwt.verify(token, process.env.SECRET);

  if (!verified) {
    res.status(401).json({ msg: 'Token not valid', verified });
  }
  const invitation = await Invitation.findById(verified.invitationId, {
    include: [User],
  });

  res.json(invitation);
};
