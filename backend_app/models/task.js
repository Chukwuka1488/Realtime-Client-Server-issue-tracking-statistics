const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Open', 'In Progress', 'Done'], default: 'Open' },
  estimate: { type: Number, required: true },
  timeSpent: { type: Number, default: 0 },
  storyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' },
}, {
  collection: 'tasks'
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };
