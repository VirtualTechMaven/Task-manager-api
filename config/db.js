const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection declined:', error);
    process.exit(1);
  }
};

module.exports = connectDB;