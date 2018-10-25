"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true }
  });

  User.associate = ({ User, AssignedTask, Group, Workflow }) => {
    User.hasMany(AssignedTask);
    User.hasMany(Workflow, { as: "submitedBy", foreignKey: "SubmitedUserId" });
    User.belongsToMany(Group, { through: "UserGroup" });
    Group.belongsToMany(User, { through: "UserGroup" });
  };

  return User;
};
