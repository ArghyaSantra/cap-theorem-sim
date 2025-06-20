const express = require('express');
const router = express.Router();
const capController = require('../controllers/cap.controller');

router.post('/write', capController.handleWriteRequest);

module.exports = router;
