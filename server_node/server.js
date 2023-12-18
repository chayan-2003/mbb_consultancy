import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser  from "cookie-parser";

const app = express();

// middleware
const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.get("/", (_, res) => {
  res.status(201).json({message: "Connected to Backend!"});
});

app.listen(PORT, () => {
    connect();
})
