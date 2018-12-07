'use strict';
module.exports = (sequelize, DataTypes) => {
  var Doc = sequelize.define('Document', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.INTEGER,
  });

  Doc.associate = ({ Workflow, Document, Task }) => {
    // Document.belongsTo(Workflow);
    Workflow.hasMany(Document);
    Document.belongsTo(Task);
  };

  return Doc;
};
