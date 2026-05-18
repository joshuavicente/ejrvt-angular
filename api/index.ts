import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Job } from './models/job.model';
import { Project } from './models/project.model';

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env['MONGO_URI']!;

// Connect to MongoDB Atlas with Connection Pooling
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
};

app.get('/api/jobs', async (req, res) => {
  await connectDB(); // Ensure connection is ready
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs', error: err });
  }
});

app.get('/api/projects', async (req, res) => {
  await connectDB(); // Ensure connection is ready
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err });
  }
});

// Conditional Server Start for Local Development
if (process.env['NODE_ENV'] !== 'production') {
  const PORT = process.env['PORT'] || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running on http://localhost:${PORT}`);
  });
}

// Since we are using Vercel's serverless functions, we export the app for Vercel to handle requests
export default app;
