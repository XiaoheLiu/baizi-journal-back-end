import express from "express";
import { checkIfTokenValid } from '../middleware/user';
import { getBaiziByUser, createBaizi } from '../controllers/baizi';

const router = express.Router();
router.use(checkIfTokenValid);

router.get('/', async (req, res) => {
  const { userId } = res.locals;
  try {
    const baizi = await getBaiziByUser(userId);
    if (baizi) {
      res.status(200).send(baizi);
    } else {
      res.sendStatus(400);
    }
  } catch(err) {
    res.sendStatus(400);
  }
});

router.post('/', async (req, res) => {
  const { userId } = res.locals;
  const baiziBody = req.body;
  baiziBody.author = userId;
  try {
    const baizi = await createBaizi(baiziBody);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
})

export default router;
