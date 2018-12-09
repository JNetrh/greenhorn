import multer from 'multer';
import path from 'path';
var express = require('express')
var aws = require('aws-sdk')
var stream = require('stream');
var multerS3 = require('multer-s3')

var s3 = new aws.S3({
  AWS_ACCESS_KEY: 'AKIAJGNKVNZQOUDRDLNA',
	AWS_SECRET_ACCESS_KEY: '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',
  REGION : 'eu-central-1',
  Bucket: 't9greenhorn',
})

var doUpload =multer({
  storage:multerS3({
    s3: s3,
    bucket: 't9greenhorn',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb){
      cb(null, Date.now().toString())
    }
  })
})
 
export const upload = multer({ doUpload }).array('documents');