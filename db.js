const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URL;


const connectDB = mongoose.connect(mongoUrl)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.error("MongoDB connection failed:", err.message);
});

module.exports = connectDB;