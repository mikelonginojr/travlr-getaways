const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const travelRoutes = require('./app_server/routes/travel');

const app = express();

// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the travel routes
app.use('/travel', travelRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


