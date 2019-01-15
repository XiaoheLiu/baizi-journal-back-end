import express from 'express';
import { createUser, authUser } from '../controllers/user';

const router = express.Router();

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