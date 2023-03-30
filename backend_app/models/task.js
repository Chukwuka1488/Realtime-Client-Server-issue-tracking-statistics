const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Task = mongoose.model('taskSchema', taskSchema);

module.exports = { Task };