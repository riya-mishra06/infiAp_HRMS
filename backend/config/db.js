const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Warning - MongoDB connection failed: ${error.message}`);
        console.error('Continuing without database connection for local/testing environment.');
        // Do not exit process - allow server to run with in-memory fallback data.
    }
};

module.exports = connectDB;
