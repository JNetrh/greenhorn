let express = require('express');
let router = express.Router();
let upload = require('./config/multerConfig.js');
 
const awsWorker = require('./controllers/s3Controller.js');
 
router.post('/', upload.single("file"), awsWorker.doUpload);
router.get('/:filename', awsWorker.doDownload);
 
 
module.exports = router;