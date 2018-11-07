import { Group } from '../../models';

const checkNeccessaryFields = (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(400)
      .json({ msg: 'Please provide all mandatory fields.' });
  }
};

export const groupsController = async (req, res) => {
  try {
    const allGroups = await Group.findAll();
    return res.json(allGroups);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const groupDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id);
    if (!group) {
      return res.status(404).json({ msg: 'This group does not exist' });
    }
    return res.json(group);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const addGroupController = async (req, res) => {
  try {
    checkNeccessaryFields(req, res);
    const { name, description } = req.body;
    const createdGroup = await await Group.create({ name, description });
    res.json(createdGroup);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const groupUpdateController = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    checkNeccessaryFields(req, res);

    const group = await Group.findById(id);
    if (!group) {
      return res.status(404).json({ msg: 'This group does not exist' });
    }

    await Group.update(
      {
        name,
        description,
      },
      {
        where: {
          id,
        },
      }
    );
    const groupUpdated = await Group.findById(id);
    return res.status(200).json(groupUpdated);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Group update internal error' });
  }
};

export const groupDeleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const group = await Group.findById(id);
    if (!group) {
      return res.status(404).json({ msg: 'This group does not exist' });
    }
    await Group.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(group);
  } catch (err) {
    return res.status(500).json({ msg: 'Group delete internal error' });
  }
};
