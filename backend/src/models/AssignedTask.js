'use strict';
module.exports = (sequelize, DataTypes) => {
  var AssignedTask = sequelize.define('AssignedTask', {
    until: DataTypes.DATE,
    note: DataTypes.STRING,
    periodicity: DataTypes.INTEGER,
  });

  // AssignedTask.associate = models => {
  //   models.AssignedTask.hasOne(models.User);
  //   models.AssignedTask.hasOne(models.Task);
  // };

  return AssignedTask;
};
