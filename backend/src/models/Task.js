'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    severity: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Task.associate = ({ Task, AssignedTask, Group, User }) => {
<<<<<<< HEAD
    Task.belongsTo(User, { as: 'createdById' });
    Task.hasMany(AssignedTask);
=======
    Task.belongsTo(User, { as: 'createdBy' });
    AssignedTask.belongsTo(Task);
>>>>>>> 7785b672aa32099a087f4b47ed45a8f2758f1e67
    Group.hasMany(Task);
  };

  return Task;
};
