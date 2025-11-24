require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/dbConnection');
const authMiddleware = require('./middleware/authMiddleware');
const isAdmin = require('./middleware/adminMiddleware');
const bookRoutes = require('./route/book');
const authRoutes = require('./route/auth');
const homeRoutes = require('./route/home');
const adminRoutes = require('./route/admin');
const imageRoutes = require('./route/image');

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/home', authMiddleware, homeRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/admin', authMiddleware, isAdmin, adminRoutes);
app.use('/api/image', imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});