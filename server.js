import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import { connectDB } from './config/db.js';
import productRoutes from './routes/productroute.js';

const app = express();
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
