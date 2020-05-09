const mongoose = require('mongoose');
// Require config package to grab string from default.json
const config = require('config');
// Grabs string value
const db = config.get('mongoURI');

// Connects to mongo DB, gives back a promise
const connectDB = async () => {
  // Runs mongoose.connect, if error -> will fail and throw err
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    // shows that our database is connected
    console.log('MongoDB Connected...')
  } catch(err) {
      // shows an error message if we fail to connect to DB
      console.log(err.message);

      // Exit process with failure
      process.exit(1);
  }
}

module.exports = connectDB;