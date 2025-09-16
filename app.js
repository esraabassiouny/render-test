require("dotenv").config();
const express = require('express')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const connectDB = require('./db')

const app = express()

connectDB;

app.use(express.json());

app.use('/api/auth',authRoutes)

app.use('/api/users',userRoutes)

const port = process.env.PORT || 100;

app.listen(port)