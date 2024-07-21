const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.mongouri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;