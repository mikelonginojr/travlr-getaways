const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load trips.json data
const tripsFilePath = path.join(__dirname, '../../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));

// Route for Travel page
router.get('/', (req, res) => {
    res.render('index', { trips });
});

module.exports = router;
