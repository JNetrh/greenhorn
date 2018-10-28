import { Invitation, User } from '../../models';
import jwt from 'jsonwebtoken';

export const getUserByInvitationToken = async (req, res) => {
  const { token } = req.params;
  const verified = jwt.verify(token, process.env.SECRET);

  if (!verified) {
    res.status(401).json({ msg: 'Token not valid' });
  }
  const invitation = await Invitation.findById(verified.invitationId, {
    include: [User],
  });

  if (!invitation) {
    res.status(404).json({ msg: 'This invitation does not exist.' });
  }

  res.json(invitation);
};
