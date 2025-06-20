const capService = require('../services/cap.service');

exports.handleWriteRequest = (req, res) => {
  const { data, replicationMode, partitionedNodes } = req.body;

  if (!data || !replicationMode) {
    return res.status(400).json({ error: 'Missing data or replicationMode' });
  }

  const result = capService.simulateWrite(data, replicationMode, partitionedNodes);
  res.json(result)
};
