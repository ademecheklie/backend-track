import express from 'express';
const router = express.Router();

router.get('/dream', (req, res) => {
  res.status(200).send('My dream is to become a good software engineer and put my legacy in this field.');

});

export default router;