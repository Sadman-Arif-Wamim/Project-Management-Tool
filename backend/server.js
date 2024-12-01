const express = require('express')
const app = express()
const passport = require('passport')
const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));