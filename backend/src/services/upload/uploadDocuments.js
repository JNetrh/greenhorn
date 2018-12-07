import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'tmp/',
  filename: (req, file, cb) => {
    cb(
      null,
      `${
        path.parse(file.originalname).name
      }_${new Date().getTime()}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({ storage }).array('documents');
