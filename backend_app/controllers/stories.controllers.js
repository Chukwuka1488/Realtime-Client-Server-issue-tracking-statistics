const { Story } = require('../models/story');
const { Task } = require('../models/task');

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

// Create a new story
storyController.createStory = async (req, res) => {
  try {
    // Create new Task objects in the database
    const tasks = await Task.insertMany(req.body.tasks);
    console.log("Checking tasks", tasks)
    // Create a new Story object
    const story = new Story({
        title: req.body.title,
        description: req.body.description,
        tasks: tasks.map(task => task._id), // Use the _id values of the Task objects
        status: req.body.status,
});

    // Save the Story object to the database
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = storyController;