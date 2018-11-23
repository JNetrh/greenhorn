export const deleteWorkflowByAssignedTask = async assignedTask => {
  const deletedRows = await Workflow.destroy({
    where: { AssignedTaskId: assignedTask.id },
  });
  return deletedRows;
};
