'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    severity: DataTypes.STRING,
    description: DataTypes.STRING,
    periodicity: DataTypes.INTEGER,
  });

  Task.associate = ({ Task, AssignedTask, Group, User, Document }) => {
    Task.belongsTo(User, { as: 'createdBy' });
    AssignedTask.belongsTo(Task);
    Group.hasMany(Task);
    Task.hasMany(Document);
    Task.belongsToMany(User, { through: 'TaskOwnership', as: 'owners' });
    // User.belongsToMany(Task, { through: 'TaskOwnership' });
  };

  return Task;
};
