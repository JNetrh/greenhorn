"use strict";
module.exports = (sequelize, DataTypes) => {
  var Workflow = sequelize.define("Workflow", {
    note: DataTypes.STRING
  });

  Workflow.associate = ({ AssignedTask, User, Workflow }) => {
    AssignedTask.hasMany(Workflow);
  };

  return Workflow;
};
