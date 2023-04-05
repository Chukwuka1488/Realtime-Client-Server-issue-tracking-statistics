const mongoose = require('mongoose');
const { Task } = require('./task');

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  status: { type: String, enum: ['Open', 'In Progress', 'Done'], default: 'Open' },
}, {
  collection: 'stories'
});


const Story = mongoose.model('Story', storySchema);

module.exports = { Story };