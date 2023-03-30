const express = require('express');
const taskController = require('../controllers/tasks.controllers');

const router = express.Router();

router.get('/', taskController.getAllTasks);

module.exports = router;