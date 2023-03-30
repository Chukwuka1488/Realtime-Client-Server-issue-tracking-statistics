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

storySchema.methods.generateRandomTasks = async function() {
  const numTasks = Math.floor(Math.random() * 10) + 1; // generate a random number of tasks between 1 and 10
  const tasks = [];
  for (let i = 0; i < numTasks; i++) {
    const task = new Task({
      title: `Task ${i+1} for ${this.title}`,
      description: `Description for Task ${i+1}`,
      estimate: Math.floor(Math.random() * 10) + 1, // generate a random estimate between 1 and 10
      storyId: this._id,
    });
    tasks.push(task);
    await task.save();
  }
  this.tasks = tasks;
  await this.save();
};

const Story = mongoose.model('Story', storySchema);

module.exports = { Story };