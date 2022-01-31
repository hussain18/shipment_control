const mongoose = require('mongoose');
require('dotenv').config();

// Database Connection
const connDB = () => {
  mongoose.connect(process.env.DB_URL);
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
