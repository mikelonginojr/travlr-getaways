const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');

// Define the route for the homepage
router.get('/', mainController.getHomepage);

module.exports = router;
