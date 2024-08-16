const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/FastFood'; // Hardcoded URI

const mongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
        
        // Fetch data from the collection
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        console.log();
        
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
    }
};

module.exports = mongoDB;
