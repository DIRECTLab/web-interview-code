import express from 'express';

const router = express.Router();

router.get('/time', async (req, res) => {
    res.json({ time: Date.now() });
});

export default router;
