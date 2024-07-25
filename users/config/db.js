const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
   // console.log(process.env.MONGO_URI,'kkkkk');
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
     //   process.exit(1);
    }
};

module.exports = connectDB;
