const express = require("express");
const mainController = require('./controllers/mainController');
const exerciceController = require('./controllers/exerciceController');
const loginController = require('./controllers/loginController');

const router = express.Router();
router.get('/', mainController.home);
router.get('/exercice', exerciceController.list);
router.get('/signup', loginController.signup);

module.exports = router;