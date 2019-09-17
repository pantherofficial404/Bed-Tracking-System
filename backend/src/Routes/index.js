const router = require('express').Router();
const mongoose = require('mongoose');

const { AuthController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

router.get('/temp', async (req, res, next) => {
  const db = mongoose.connection.db;
  const response = await db
    .collection('hospital')
    .find({})
    .limit(1)
    .toArray();
  res.json({
    data: response
  });
});

module.exports = router;
