export const getTaskOwners = users =>
  users.filter(user => ['taskowner', 'hr'].includes(user.role));

export const canUserEditTask = (task, user) => {
  const { role, id } = user;
  console.log(task, user);
  if (role === 'hr') {
    console.log('Is HR');
    return true;
  }
  if (role === 'taskowner') {
    if (task.owners.includes(id)) {
      console.log('Is task owner');
      return true;
    }
    if (task.createdById === id) {
      console.log('Is owner');
      return true;
    }
  }
  console.log('Is nothing.');
  return false;
};
