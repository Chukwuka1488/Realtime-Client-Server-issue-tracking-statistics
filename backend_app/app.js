const express = require('express');
const path = require('path');

const mongoose = require('./db/mongoose');

// This is a Node JS package, also known as the express js middleware. 
// It allows enabling CORS with multiple options.
const cors = require('cors');
// The body-parser npm module is a JSON parsing middleware. 
// It helps to parse the JSON data, plain text or a whole object.
const bodyParser = require('body-parser');

// homepage router
const indexRoute = require('./routes/index')

const app = express()

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(express.static(path.join(__dirname, 'dist/frontend-app')))
// app.use('/', express.static(path.join(__dirname, 'dist/frontend-app')))

// app.get('/', function(req, res) {res.send("Hello world!")})

// render the homepage
app.use('/', indexRoute);

// PORT 
const port = process.env.PORT || 3010

const server = app.listen(port, () => console.log(`Listening on port ${port}...`))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
});