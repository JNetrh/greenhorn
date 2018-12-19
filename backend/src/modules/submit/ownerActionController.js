import { setWorkflow } from '../../services/workflow/addWorkflow';
import { Workflow, TaskStatus } from '../../models';

export const ownerActionController = async (req, res) => {
  const { status, assignedTaskId, comment } = req.body;

  try {
    const allRecords = await Workflow.findAll({
      where: { AssignedTaskId: assignedTaskId },
      include: [TaskStatus],
      order: [['createdAt', 'desc']],
    });

    allRecords.map(record => console.log(record.TaskStatus.name));
    console.log(allRecords[0].TaskStatus.name);

    if (
      allRecords[0].TaskStatus.name === 'returned' ||
      allRecords[0].TaskStatus.name === 'done'
    ) {
      return res.status(409).json({ msg: 'record already exists' });
    }

    const workflow = await setWorkflow({
      status,
      assignedTask: assignedTaskId,
      note: comment,
      submitUser: req.userId,
    });
    return res.json(workflow);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
