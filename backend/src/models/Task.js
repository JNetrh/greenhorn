"use strict";
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    severity: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Task.associate = ({ Task, AssignedTask, Group, User }) => {
    User.hasMany(Task, { as: 'createdBy', foreignKey: 'createdBy' });
    Task.hasMany(AssignedTask);
    Group.hasMany(Task);
  };

  return Task;
};
