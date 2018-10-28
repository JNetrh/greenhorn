const models = require('./src/models');

// console.log(process.env);

models.sequelize.sync();
