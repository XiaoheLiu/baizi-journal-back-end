import crypto from 'crypto';
import jwt from 'jwt-simple';
import { PASSWORD_SALT, JWT_SECRET } from '../constants/secrets';

const jwtSecret = Buffer.from(JWT_SECRET, 'hex');

export const hashPassword = (password) => {
  if (!password) {
    return null;
  }
  const hash = crypto.createHmac('sha256', PASSWORD_SALT);
  hash.update(password);
  return hash.digest('hex');
};

export const generateToken = (payload) => jwt.encode(payload, jwtSecret);

export const decodeToken = (token) => {
  try {
    const decoded = jwt.decode(token, jwtSecret);
    return decoded;
  } catch (error) {
    return null;
  }
}