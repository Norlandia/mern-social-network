const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const PORT = process.env.PORT || 5000;
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

app.get('/', (req, res) => res.send('Hello!'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
