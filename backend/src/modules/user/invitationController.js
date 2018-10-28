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
