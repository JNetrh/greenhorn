import { User } from '../../models';

export const editMyAccountController = async (req, res) => {
  const { name, surname } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ msg: `User not found!` });
    }

    await User.update(
      {
        name,
        surname,
      },
      {
        where: {
          id: req.userId,
        },
      }
    );
    return res
      .status(200)
      .json({ msg: `Your changes have been successfully saved.` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
