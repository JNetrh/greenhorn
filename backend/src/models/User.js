'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
  });

  User.associate = ({ User, AssignedTask, Group, Workflow, Invitation }) => {
    User.hasMany(AssignedTask);
    User.hasMany(Invitation);
    User.hasMany(Workflow, { as: 'submitedBy', foreignKey: 'SubmitedUserId' });
    User.belongsToMany(Group, { through: 'UserGroup' });
    Group.belongsToMany(User, { through: 'UserGroup' });
  };

  return User;
};
