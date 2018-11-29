'use strict';
module.exports = (sequelize, DataTypes) => {
  var TaskStatus = sequelize.define('TaskStatus', {
    name: DataTypes.STRING,
  });

  TaskStatus.associate = models => {
    // models.TaskStatus.hasMany(models.Workflow);
  };

  return TaskStatus;
};
