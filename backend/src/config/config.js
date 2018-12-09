const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  awsSecretKey: process.env.AWS_SECRET_KEY,
  awsKey: process.env.AWS_KEY,
  s3bucket: process.env.AWS_S3_BUCKET,
};
