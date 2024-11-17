import express from 'express';
const router = express.Router();

router.get('/dream', (req, res) => {
  res.status(200).send('');

});

export default router;