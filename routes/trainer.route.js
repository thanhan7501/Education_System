var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainer.controller');

router.get('/updateInformation/:username', controller.getUpdateInformation)

router.put('/updateInformation/:username', controller.putUpdateInformation)

router.get('/listTrainee/:course', controller.listTrainee);

router.get('/viewTopic/:course', controller.viewTopic);

router.get('/createTopic/:course', controller.getCreateTopic);

router.post('/createTopic/:course', controller.postCreateTopic),

router.get('/deleteTopic/:id', controller.deleteTopic);

router.get('/updateTopic/:id', controller.getUpdateTopic);

router.post('/updateTopic/:id', controller.putUpdateTopic);

router.get('/', controller.index);

module.exports = router;