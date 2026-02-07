const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Database file import ki

// 1. Config Load 
dotenv.config();

// 2. Database Connect
connectDB();

// 3. App Initialize 
const app = express();

// 4. Middlewares (Security & JSON)
app.use(cors());
app.use(express.json());

// 5. Test Route (Check karne ke liye ki server chal raha hai)
app.get('/', (req, res) => {
    res.send('API is running... 🚀');
});

// 6. Server Start

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});