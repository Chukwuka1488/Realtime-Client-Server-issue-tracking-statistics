// const { workerData, parentPort } = require('worker_threads');
// const { Task } = require('../models/task');

// const processTask = async (taskData) => {
//   // Code to process Task goes here
// }

// const processTasks = async () => {
//   const tasks = workerData.tasks;
//   for (let i = 0; i < tasks.length; i++) {
//     const taskData = tasks[i];
//     await processTask(taskData);
//   }
//   parentPort.postMessage({ status: 'done' });
// }

// processTasks();