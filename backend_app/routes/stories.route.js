const express = require('express');
const router = express.Router();
const storyController = require('../controllers/stories.controllers');

router.get('/', async(req, res) => {
    await storyController.getAllStories(req, res);
});

// Route for creating a new story
router.post('/', async(req, res) => {
    await storyController.createStory(req,res);
});

module.exports = router;