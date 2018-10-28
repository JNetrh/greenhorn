"use strict";
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    severity: DataTypes.STRING
  });

  Task.associate = ({ Task, AssignedTask, Group }) => {
    Task.hasMany(AssignedTask);
    Group.hasMany(Task);
  };

  return Task;
};
