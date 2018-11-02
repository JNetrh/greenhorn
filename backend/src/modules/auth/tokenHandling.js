const jwt = require('jsonwebtoken');

export const getToken = ({ userId, role }, expiresIn = '12h') =>
  jwt.sign({ userId, role }, process.env.SECRET, {
    expiresIn,
  });

export const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.cookies['auth-token'];

  if (!token) return res.status(401).send({ msg: 'No token provided.' });

  try {
    const { userId, role } = jwt.verify(token, process.env.SECRET);
    req.userId = userId;
    req.role = role;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send({ msg: 'Token expired.' });
    }
    return res.status(401).send({ msg: 'Token not valid.' });
  }
};
