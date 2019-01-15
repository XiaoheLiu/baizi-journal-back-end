import express from 'express';
import { createUser, authUser, getUser } from '../controllers/user';

const router = express.Router();

router.get('/', async (req, res) => {
  const { token } = req.body;
  try {
    const user = await getUser(token);
    if (user) {
      res.send(user);
    } else {
      res.send(400);
    }
  } catch(err) {
    res.send(400);
  }
})

router.put('/', async (req, res) => {
    const { username, password } = req.body;
    const token = await createUser(username, password);
    if (token) {
      res.send({ token });
    } else {
      res.send(400);
    }
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const token = await authUser(username, password);
    if (token) {
      res.send({ token });
    } else {
      res.send(401);
    }
});

export default router;