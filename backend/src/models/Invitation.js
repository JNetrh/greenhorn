"use strict";
module.exports = (sequelize, DataTypes) => {
  var Invitation = sequelize.define("Invitation", {
    token: DataTypes.STRING
  });

  Invitation.associate = models => {
    models.User.hasMany(models.Invitation);
  };

  return Invitation;
};
