const router = require('express').Router();
const AuthController = require('../Controllers/AuthController');

router.get('/login',AuthController.login);
router.get('/signup',AuthController.signup);

module.exports = router;