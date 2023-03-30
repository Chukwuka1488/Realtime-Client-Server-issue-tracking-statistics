const connectDB = require('./mongoose');
const mongoose = require('mongoose');
const { Story } = require('../models/story');
const { Task } = require('../models/task');

// async function seedData() {
//   // Connect to MongoDB
//   await connectDB();

//   // Delete all existing documents
//   await Story.deleteMany();
//   await Task.deleteMany();

//   // Create stories
//   const story1 = new Story({
//     title: 'Story 1',
//     description: 'Description for Story 1',
//   });
//   await story1.save();
//   await story1.generateRandomTasks();

//   const story2 = new Story({
//     title: 'Story 2',
//     description: 'Description for Story 2',
//   });
//   await story2.save();
//   await story2.generateRandomTasks();

//   console.log('Data seeded successfully.');
// }

// seedData()
//   .catch((err) => console.log('Error seeding data:', err))
//   .finally(() => mongoose.disconnect());

// module.exports = seedData;