const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const { engine } = require('express-handlebars');

// Set Handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));


const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);


// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error("Express Error:", err.stack); // Log full error in Git Bash
    res.status(err.status || 500).send(`<h1>Internal Server Error</h1><pre>${err.stack}</pre>`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

