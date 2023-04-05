require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const connectDB = require('./db/mongoose');
const storyController = require('./controllers/stories.controllers');
const { getUpdatedStories, getUpdatedTasks, getEstimatedLoad } = require('./utils/worker');
const path = require('path');
// const seedData = require('./db/seed');
const cors = require('cors');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const os = require('os');

// // Attach Socket.io
// const app = express()
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:4200",
//     methods: ["GET", "POST"]
//   }
// });

if (cluster.isMaster) {
  // Master process
  const numCPUs = os.cpus().length;
  let numWorkers = Math.min(numCPUs, 4); // Start with at least 4 workers

  // Create initial workers
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  // Listen for incoming tasks from clients
  // ...

  // Adjust the number of workers based on the incoming load
  setInterval(() => {
    const load = getEstimatedLoad(); // Function to estimate the current load
    if (load > 0.8 && numWorkers < numCPUs) {
      // High load, add more workers
      cluster.fork();
      numWorkers++;
    } else if (load < 0.2 && numWorkers > 1) {
      // Low load, remove some workers
      for (const id in cluster.workers) {
        cluster.workers[id].kill();
        numWorkers--;
        break;
      }
    }
  }, 1000);
} else {
  // Worker process

  // Attach Socket.io
  const app = express()
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });

// routes
const taskRoutes = require('./routes/tasks.route')
const storyRoutes = require('./routes/stories.route')
const port = process.env.PORT || 3010

// Define the error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes 
app.use('/api/tasks', taskRoutes);
app.use('/api/stories', storyRoutes);

// socket connection
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  socket.on('newStory', async(data) => {
    console.log('Received new story:', data);
    const stories = await getUpdatedStories();
    const tasks = await getUpdatedTasks();
    io.emit('newStory', { stories, tasks });
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

const index = async () => {
  try {
    await connectDB();
    // await seedData();
    server.listen(port, () => console.log(`Listening on port ${port}...`))
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
} 
index();
}
