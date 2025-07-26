
const express = require('express');
const { testingController } = require('../controller/testController');

const router = express.Router();

// Define your routes here
router.get('/test', testingController);

module.exports = router;