import express from 'express';
import { MONGO_DUPLICATE_KEY_ERROR } from '../constants/code';
import { createUser, authUser, getUser } from '../controllers/user';

const router = express.Router();

router.get('/', async (req, res) => {
  const { token } = req.body;
  try {
    const user = await getUser(token);
    if (user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(400);
    }
  } catch(err) {
    res.sendStatus(400);
  }
})

router.post('/create', async (req, res) => {
    const { username, password } = req.body;
    try {
      const token = await createUser(username, password);
      if (token) {
        res.status(201).send({ token });
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY_ERROR) {
        res.sendStatus(409);
      }
      res.sendStatus(400);
    }
});

router.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const token = await authUser(username, password);
    if (token) {
      res.status(200).send({ token });
    } else {
      res.sendStatus(401);
    }
});

export default router;