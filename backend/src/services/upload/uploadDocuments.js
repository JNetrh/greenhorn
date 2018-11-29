import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: 'tmp/',
  filename: function(req, file, cb) {
    cb(
      null,
      `${
        path.parse(file.originalname).name
      }_${new Date().getTime()}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({ storage }).array('documents');
