const mongoose = require('./mongoose');
const { Story } = require('../models/story');
const { Task } = require('../models/task');

// console.log("Checking", Task)
// // task
// const tasks = [
//     { estimate: 1, status: 'Done' },
//     { estimate: 2, status: 'Open' },
//     { estimate: 3, status: 'Done' },
//     { estimate: 4, status: 'Open' },
//     { estimate: 5, status: 'Done' },
//     { estimate: 6, status: 'Open' },
//     { estimate: 7, status: 'Done' },
//     { estimate: 8, status: 'Open' },
//     { estimate: 9, status: 'Done' },
//     { estimate: 10, status: 'Open' }
//   ];

// story
const stories = [{   
    tasks: [
        { estimate: 1, status: 'Done' }, 
        { estimate: 2, status: 'Open' }    
    ],
    status: 'Open'
  },
  {
    tasks: [
      { estimate: 3, status: 'Done' },
      { estimate: 1, status: 'Done' },
      { estimate: 4, status: 'Done' }
    ],
    status: 'Done'
  },
  // Add more objects as needed to meet your minimum of 5
];

// Task.insertMany(tasks)
//   .then(() => console.log('Data seeded successfully.'))
//   .catch((err) => console.log('Error seeding data:', err))
//   .finally(() => mongoose.disconnect());


Story.insertMany(stories)
  .then(() => console.log('Data seeded successfully.'))
  .catch((err) => console.log('Error seeding data:', err))
  .finally(() => mongoose.disconnect());