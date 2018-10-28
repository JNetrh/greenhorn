"use strict";
module.exports = (sequelize, DataTypes) => {
  var NotifType = sequelize.define("NotificationType", {
    type: DataTypes.STRING
  });

  NotifType.associate = ({ NotificationType, Notification }) => {
    NotificationType.hasMany(Notification);
  };

  return NotifType;
};
