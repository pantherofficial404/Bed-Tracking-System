const { User } = require("Models");
const jwt = require("jsonwebtoken");
const config = require("config");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const message = [];
  if (!username) {
    message.push("Username is required");
  }
  if (!password) {
    message.push("Password is required");
  }
  if (!username || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }

  const user = await User.findOne({ username, password }, { username: 1 });
  if (!user) {
    res.json({
      code: 401,
      data: {
        message: ["Invalid username or password"]
      },
      success: false
    });
    return;
  }
  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get("jwt").secret);
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

const signup = async (req, res, next) => {
  const { username, password } = req.body;
  const message = [];
  if (!username) {
    message.push("Username is required");
  }
  if (!password) {
    message.push("Password is required");
  }
  if (!username || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({
      code: 401,
      data: {
        message: ["User is already exists"]
      },
      success: false
    });
    return;
  }

  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get("jwt").secret);
  await new User({
    username,
    password
  }).save();
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

module.exports = {
  login,
  signup
};
