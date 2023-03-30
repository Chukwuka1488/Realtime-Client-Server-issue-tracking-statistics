const mongoose = require('mongoose');
require('dotenv').config();

// Connecting with mongo db
const connectDB = async () => {
  try {
    const mongoString = process.env.DATABASE_URL;
    await mongoose.connect(mongoString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Database Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;