import crypto from 'crypto';
import jwt from 'jwt-simple';
import { PASSWORD_SALT, JWT_SECRET } from '../constants/secrets';

export const hashPassword = (password) => {
  if (!password) {
    return null;
  }
  const hash = crypto.createHmac('sha256', PASSWORD_SALT);
  hash.update(password);
  return hash.digest('hex');
};

export const generateToken = (payload) => jwt.encode(payload, Buffer.from(JWT_SECRET, 'hex'));
