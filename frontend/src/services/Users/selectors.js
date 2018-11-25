export const getTaskOwners = users =>
  users.filter(user => ['taskowner', 'hr'].includes(user.role));

export const canUserEditTask = (task, user) => {
  const { role, id } = user;
  if (role === 'hr') {
    return true;
  }
  if (role === 'taskowner') {
    const taskOwnersIds = task.owners.map(({ id }) => id);
    if (taskOwnersIds.includes(id)) {
      return true;
    }
    if (task.createdById === id) {
      return true;
    }
  }
  return false;
};
