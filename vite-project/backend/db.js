const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/FastFood'; // Hardcoded URI

const mongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
    }
};

module.exports = mongoDB;
