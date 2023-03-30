const mongoose = require('mongoose');
require('dotenv').config();
// Connecting with mongo db
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(1); // exit the process with an error code
});

module.exports = mongoose;