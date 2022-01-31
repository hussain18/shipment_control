const mongoose = require('mongoose');
require('dotenv').config();

// Database Connection
const connDB = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yirrd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  mongoose.connection.on('error', (err) => {
    console.log('DATABASE_CONNECTION_ERROR: \n', err);
  });
  mongoose.connection.on('connected', (err, res) => {
    console.log('DATABASE CONNECTION SUCCESSFUL');
  });
};

module.exports = {
  connDB,
};
