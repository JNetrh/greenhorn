"use strict";
module.exports = (sequelize, DataTypes) => {
  var Doc = sequelize.define("Document", {
    url: DataTypes.STRING
  });

  Doc.associate = ({ Workflow, Document, Task }) => {
    Document.belongsTo(Workflow);
    Document.belongsTo(Task);
  };

  return Doc;
};
