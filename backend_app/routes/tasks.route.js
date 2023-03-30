const express = require('express');
const taskRouter = express.Router();


const taskController = require('../controllers/tasks.controllers')

// get homepage
taskRouter.get('/', taskController.homepageController);

// Add Task
taskRouter.post('/create', taskController.createTask);

// Get All Tasks
taskRouter.get('/', taskController.getAllTasks);

// Get single Task
taskRouter.get('/read/:id', taskController.getTaskById);

// Update Task
taskRouter.put('/update/:id', taskController.updateTaskById);

// Delete Task
taskRouter.delete('/delete/:id', taskController.deleteTaskById);

// export taskRouter to be used in app.js
module.exports = taskRouter;