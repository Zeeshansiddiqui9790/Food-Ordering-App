const express = require('express');
const mongoDB = require('./db');

const app = express();
const port = 6001; // or use process.env.PORT if you set it in your environment

// Connect to MongoDB
mongoDB();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
   
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json())
app.use('/api', require('./Routes/CreateUser')); 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
