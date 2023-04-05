const os = require('os');
const { Story } = require('../models/story'); // replace with the path to your Story model
const { Task } = require('../models/task'); // replace with the path to your Task model

async function getUpdatedStories() {
  // retrieve updated stories from the database
  const stories = await Story.find();
  return stories;
}

async function getUpdatedTasks() {
  // retrieve updated tasks from the database
  const tasks = await Task.find();
  return tasks;
}

// function getEstimatedLoad() {
//   const cpuUsage = os.loadavg()[0] / os.cpus().length;
//   const memoryUsage = 1 - os.freemem() / os.totalmem();
//   return cpuUsage + memoryUsage;
// }

module.exports = { getUpdatedStories, getUpdatedTasks };