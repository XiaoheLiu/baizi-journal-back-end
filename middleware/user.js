import { decodeToken } from '../utils/index'

export const checkIfTokenValid = (req, res, next) => {
  const token = req.headers.authorization;
  const user = decodeToken(token);
  if (user) {
    res.locals.userId = user._id;
    next();
  } else {
    res.sendStatus(401);
  }
}