import { Group } from '../../models/';

const createGroup = async group => {
  try {
    return await Group.create(group);
  } catch (error) {
    return error;
  }
};

const addGroupController = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }

    const createdGroup = await createGroup({
      name,
      description,
    });
    res.json(createdGroup);
  } catch (error) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addGroupController;
