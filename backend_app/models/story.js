const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { taskSchema } = require('./task');

let taskSchema = new Schema({
  estimate: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Open', 'Done'],
    default: 'Open'
  }
}, {
    collection: 'tasks'
});

module.exports = { taskSchema };

const storySchema = new Schema({
    tasks: [taskSchema],
    status: {
        type: String,
        enum: ['Open', 'Done'],
        default: 'Open'
    }
});

const Story = mongoose.model('Story', storySchema);

module.exports = { Story };
// Define collection and schema
// const storySchema = new Schema({
//     tasks: [taskSchema],
//     status: {
//         type: String,
//         enum: ['Open', 'Done'],
//         default: 'Open'
//     }
// });

// const Story = mongoose.model('Story', storySchema);

// module.exports = { Story };