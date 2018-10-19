const jwt = require('jsonwebtoken');

const getToken = (userId, expiresIn = '12h') =>
  jwt.sign({ userId }, process.env.SECRET, {
    expiresIn,
  });

const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.cookies.token;
  if (!token) return res.status(401).send({ msg: 'No token provided.' });

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.userId = verified.userId;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send({ msg: 'Token expired.' });
    }
    return res.status(401).send({ msg: 'Token not valid.' });
  }
};

module.exports = {
  getToken,
  verifyToken,
};
