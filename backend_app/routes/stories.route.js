const express = require('express');
const storyController = require('../controllers/stories.controllers');

const router = express.Router();

router.get('/', storyController.getAllStories);

// Route for creating a new story
router.post('/', storyController.createStory);

module.exports = router;