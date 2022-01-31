const express = require('express');
const cors = require('cors');
const db = require('./db');
const api = require('./api');
require('dotenv').config();

app = express();
PORT = process.env.PORT || 3001;

// Express Use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
db.connDB();

// Routers
app.get('/', (req, res) => {
  res.sendStatus(418);
});

app.use('/', api.addInfoRouters);

// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
