// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import contactRoutes from './routes/contactRoutes.js';
import { submitContactForm } from './controllers/contactController.js';

const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin:"https://mbbconsultancy.in" || "http://localhost:3000",
  methods: 'GET, POST, OPTIONS',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
const PORT = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Connected to Backend!' });
});

// app.post('/contacts/submit', async(req, res) => {
//   // Your handling for the contact form submission
//   // ...
  
//   // Send the appropriate CORS headers
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Credentials', 'true');
  // res.status(200).json({ message: 'Form submitted successfully!' });
// });

app.post('/contacts/submit', submitContactForm);

app.use('/contacts', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "https://mbbconsultancy.in" || 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.status(201).json({ message: 'Form submitted successfully!' });
  next();
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

// // Routes
// app.use('/contacts', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
