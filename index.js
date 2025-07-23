import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/jobroute.js';
import crouter from './Routes/companyroutes.js';
import arouter from './Routes/applicationroutes.js';
import authRoutes from './Routes/auth.js';
import { submitApplication } from './Controllers/applicationcontroller.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json());

app.use('/api/jobs', router);
app.use('/api/comps', crouter);
app.use('/api/apps', arouter);
app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.error(err));

app.listen(3004, () => console.log("Server running on port 3004"));
  