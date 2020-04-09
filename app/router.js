const express = require("express");
const mainController = require('./controllers/mainController');
const exerciceController = require('./controllers/exerciceController');
const loginController = require('./controllers/loginController');

const router = express.Router();
router.get('/', mainController.home);
router.get('/exercice', exerciceController.list);
router.get('/signup', loginController.signupPage);
router.get('/login', loginController.loginPage);

module.exports = router;