const router = require('express').Router();

const { AuthController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

// Testing Routes
router.get('/test', AuthController.test);

module.exports = router;
