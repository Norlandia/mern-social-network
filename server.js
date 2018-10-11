const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

app.get('/', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
