import express from 'express';
const router = express.Router();

router.get('/hobby', (req, res) => {
  res.status(200).json({ hobby: 'Building fullstack mobile and Web Applications that will have impact on the society' });
});

export default router;
