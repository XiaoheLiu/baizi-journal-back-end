import User from '../models/user';
import { hashPassword, generateToken } from '../utils/hash';
import { error } from 'util';

export const createUser = async (username, password) => {
  const newUser = User({
    username,
    password: hashPassword(password)
  });

  const savedUser = await newUser.save();
  if (savedUser) {
    const token = generateToken(savedUser);
    return token;
  }
  return null;
}

export const authUser = async (username, password) => {
  const storedUser = await User.findOne({ username }, 'username password');
  if (storedUser && storedUser.password === hashPassword(password)) {
    return generateToken(storedUser);;
  }
  return null;
}
