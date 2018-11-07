export const checkIfHr = async (req, res, next) => {
  if (req.role === 'hr') {
    next();
  } else {
    return res.status(401).json({ msg: 'Only HR people can do this' });
  }
};
