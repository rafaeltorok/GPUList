import express from 'express';
import gpus from '../data/gpudata.json' with { type: 'json' };
const router = express.Router();

router.get('/gpus', (req, res) => {
  res.status(200).json(gpus);
});

export default router;