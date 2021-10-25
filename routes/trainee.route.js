var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainee.controller');

router.get('/updateInformation/:username', controller.getUpdateInformation)

router.put('/updateInformation/:username', controller.putUpdateInformation)

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/', controller.index);

module.exports = router;