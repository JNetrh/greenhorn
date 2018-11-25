'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workflow = sequelize.define('Workflow', {
    note: DataTypes.STRING,
  });

  Workflow.associate = ({ AssignedTask, User, Workflow, TaskStatus }) => {
    AssignedTask.hasMany(Workflow);
    Workflow.belongsTo(TaskStatus);
    Workflow.belongsTo(User, {
      as: 'submittedBy',
      foreignKey: 'SubmitedUserId',
    });
  };

  return Workflow;
};
