// server.js
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import aboutUsRoutes from './routes/aboutUsRoutes.js';
import clientsRoutes from './routes/clientsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';

const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_PROD_URL || "http://localhost:3000",
  methods: 'GET, POST',
  credentials: true,
  optionsSuccessStatus: 204,
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
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

app.get('/', (_, res) => {
  res.status(201).json({ message: 'Connected to Backend!' });
});

// Routes
app.use('/contacts', contactRoutes);
app.use('/home', homeRoutes);
app.use('/about-us', aboutUsRoutes);
app.use('/clients', clientsRoutes);
app.use('/projects', projectsRoutes);

// Error handling middleware for all routes
app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  if (err.name === 'ValidationError') {
    // Handle validation errors
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    // Handle duplicate key error (MongoDB)
    return res.status(400).json({ error: 'Duplicate key error' });
  }

  // Generic error handling
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
