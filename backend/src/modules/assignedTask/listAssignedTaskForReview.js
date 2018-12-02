import { AssignedTask, Task, Workflow, User } from '../../models';

export const listAssignedTaskForReview = async (req, res) => {
  const id = req.params;
  const OwnerId = Number(id.id);
  if (!OwnerId) {
    return res.status(404).json({ msg: `wrong request "${OwnerId}"` });
  }

  const listTaskToReview = await AssignedTask.findAll({
    include: [
      {
        model: Task,
        include: [
          {
            model: User,
            as: 'owners',
            through: {
              attributes: [],
            },
            where: {
              id: OwnerId,
            },
            attributes: [
              `id`,
              `name`,
              `surname`,
              `role`,
              `email`,
              `createdAt`,
              `updatedAt`,
            ],
          },
        ],
      },
      {
        model: Workflow,
        where: {
          TaskStatusId: 2,
        },
      },
    ],
  });

  return res.json(listTaskToReview);
};
