require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/dbConnection');
const bookRoutes = require('./route/book');


connectDB();

app.use(express.json());

app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});