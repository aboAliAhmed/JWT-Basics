const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  //an id provided normally by db
  const id = new Date().getDate();

  // to keep payload small for someone has a bad internet connection
  // because the bigger the payload the more data is being sent over the wire
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: `${process.env.JWT_EXPIRES_IN}`,
  });

  res.status(200).json({ msg: 'user created', token });
};

exports.dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, Your lucky number os ${luckyNumber}`,
  });
};
