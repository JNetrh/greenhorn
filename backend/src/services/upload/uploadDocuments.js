import multer from 'multer';
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  AWS_ACCESS_KEY: 'AKIAJGNKVNZQOUDRDLNA',
  AWS_SECRET_ACCESS_KEY: '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',
  REGION: 'eu-central-1',
  Bucket: 't9greenhorn',
});

const doUpload = multer({
  storage: multerS3({
    s3,
    bucket: 't9greenhorn',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

export const upload = multer({ doUpload }).array('documents');
