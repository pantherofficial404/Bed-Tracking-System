const router = require('express').Router();
const mongoose = require('mongoose');

const { AuthController, ProductController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

// Product
router.get('/product', ProductController.getProduct);
router.post('/product', ProductController.addProduct);

module.exports = router;
