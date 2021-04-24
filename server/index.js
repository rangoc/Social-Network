const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRoute = require('./routes/users');
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
);

// middleware
app.use(express.json()); // body parser for when making requests it's going to help with parsing them
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', usersRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
