import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import emailRouter from './api/send-email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log çdo kërkese
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', emailRouter);

// Shërbe skedarët statikë nga dist (pasi Vite build)
app.use(express.static(path.join(__dirname, 'dist')));

// Për çdo rrugë tjetër, dërgo index.html (për React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Nis serverin
app.listen(PORT, () => {
  console.log('=================================');
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 API endpoint: POST /api/submit-form`);
  console.log(`📁 Static files served from: ${path.join(__dirname, 'dist')}`);
  console.log('=================================');
});

export default app;