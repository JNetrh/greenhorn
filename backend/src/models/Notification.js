"use strict";
module.exports = (sequelize, DataTypes) => {
  var Notif = sequelize.define("Notification");

  Notif.associate = ({ AssignedTask, Notification }) => {
    AssignedTask.hasMany(Notification);
  };

  return Notif;
};
