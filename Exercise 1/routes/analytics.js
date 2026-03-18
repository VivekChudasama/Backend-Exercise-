const express = require('express');
const router = express.Router();
const controller = require('../controllers/analytics')

router.get('/analytics' , controller.analytics)

module.exports = router