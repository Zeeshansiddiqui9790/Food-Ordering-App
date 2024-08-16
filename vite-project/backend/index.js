const express = require('express');
const mongoDB = require('./db');

const app = express();
const port = 6001; // or use process.env.PORT if you set it in your environment

// Connect to MongoDB
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json())
app.use('/api', require('./Routes/CreateUser')); 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
