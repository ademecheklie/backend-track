import express from 'express';
const router = express.Router();

router.get('/name', (req, res) => {
  res.status(200).send('Ademe Cheklie');
});

export default router;
