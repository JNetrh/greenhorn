export const getTaskOwners = users =>
  users.filter(user => ['taskowner', 'hr'].includes(user.role));

export const canUserEditTask = (task, user) => {
  const { role, id } = user;
  if (role === 'hr') {
    return true;
  }
  if (role === 'taskowner') {
    if (task.owners.includes(id)) {
      return true;
    }
    if (task.createdById === id) {
      return true;
    }
  }
  return false;
};
