const mongoose = require('mongoose');
require('dotenv').config();

// Connecting with mongo db
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('open', () => {
  console.log('Database Connected');
});

module.exports = mongoose;