require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const contactDetails = require('./routes/contactlist.route.js');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
// app.use('/api/products', productRoute);
app.use('/api/contactDetails', contactDetails);
app.use('/api/getContactDetails', contactDetails);

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

// Ensure MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in environment variables.');
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.log('Connection failed!', error);
  });

  