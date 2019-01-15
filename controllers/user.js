import User from '../models/user';
import { hashPassword, generateToken, decodeToken } from '../utils/hash';
import { error } from 'util';

export const getUser = async (token) => {
  const { _id } = decodeToken(token);
  const storedUser = await User.findById(_id, 'username');
  return storedUser;
}

export const createUser = async (username, password) => {
  const newUser = User({
    username,
    password: hashPassword(password)
  });

  const savedUser = await newUser.save();
  if (savedUser) {
    return generateToken(savedUser);
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
