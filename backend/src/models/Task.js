'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    severity: DataTypes.STRING,
    description: DataTypes.STRING,
    periodicity: DataTypes.INTEGER,
    latestassigned: DataTypes.DATE,
  });

  Task.associate = ({ Task, AssignedTask, Group, User }) => {
    Task.belongsTo(User, { as: 'createdBy' });
    AssignedTask.belongsTo(Task);
    Group.hasMany(Task);
    Task.belongsToMany(User, { through: 'TaskOwnership', as: 'owners' });
    // User.belongsToMany(Task, { through: 'TaskOwnership' });
  };

  return Task;
};
