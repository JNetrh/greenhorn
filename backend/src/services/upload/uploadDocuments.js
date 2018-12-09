import multer from 'multer';
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
import path from 'path';
import config from '../../config/config';

aws.config.update({
  secretAccessKey: config.awsSecretKey,
  accessKeyId: config.awsKey,
});

const s3 = new aws.S3();

const uploadMulter = multer({
  storage: multerS3({
    s3,
    bucket: config.s3bucket,
    key: (req, file, cb) => {
      cb(
        null,
        `${
          path.parse(file.originalname).name
        }_${new Date().getTime()}${path.extname(file.originalname)}`
      );
    },
  }),
});

export const upload = uploadMulter.array('documents');
