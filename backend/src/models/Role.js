"use strict";
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define("Role", {
    name: DataTypes.STRING
  });

  Role.associate = models => {
    models.User.belongsTo(models.Role);
  };

  return Role;
};
