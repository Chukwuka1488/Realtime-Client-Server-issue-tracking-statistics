require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./db/mongoose');
// const seedData = require('./db/seed');
// It allows enabling CORS with multiple options.
const cors = require('cors');
// It helps to parse the JSON data, plain text or a whole object.
const bodyParser = require('body-parser');

// task router
const taskRoutes = require('./routes/tasks.route')
// story router
const storyRoutes = require('./routes/stories.route')

const app = express()
// PORT 
const port = process.env.PORT || 3010

// app.use(logger('dev'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')))
// app.use('/', express.static(path.join(__dirname, 'dist/frontend-app')))

// app.get('/', function(req, res) {res.send("Hello world!")})

// render the tasks
app.use('/api/tasks', taskRoutes);
// render the stories
app.use('/api/stories', storyRoutes);



const server = async () => {
  try {
    await connectDB();
    console.log("Database connection established")
    // await seedData();
    app.listen(port, () => console.log(`Listening on port ${port}...`))
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
} 

server();