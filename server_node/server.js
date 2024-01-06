// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Update this with your Netlify frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and other credentials to be sent cross-origin
  optionsSuccessStatus: 204, // Respond with 204 No Content for preflight requests
};

app.use(cors(corsOptions));

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
  res.status(201).json({ message: 'Connected to Backend!' });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.use('/contacts', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
