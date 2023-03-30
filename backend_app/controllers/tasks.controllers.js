const { Task } = require('../models/task');

const taskController = {};

// Get all tasks
taskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = taskController;