const express = require('express');
const storyController = require('../controllers/stories.controllers');

const router = express.Router();

router.get('/', storyController.getAllStories);

module.exports = router;