const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars (if used)
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'views'));

// Routes
const routes = require('./routes');
app.use('/', routes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
