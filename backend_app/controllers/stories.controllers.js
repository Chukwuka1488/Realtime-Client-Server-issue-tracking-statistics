const Story = require('../models/story');

const storyController = {};

// Get all stories
storyController.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = storyController;