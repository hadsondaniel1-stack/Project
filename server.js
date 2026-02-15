import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import emailRouter from './api/send-email.js';

// Ngarko variablat nga .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Error handling global
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  console.error('❌ Stack:', err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});

console.log('🚀 Server.js starting...');
console.log('📂 Current directory:', process.cwd());
try {
  console.log('📂 Files in current directory:', fs.readdirSync('.'));
} catch (err) {
  console.log('❌ Could not read directory:', err.message);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware për CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log çdo kërkese
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', emailRouter);

// Shërbe skedarët statikë
app.use(express.static(path.join(__dirname, 'dist')));

// Për React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Nis serverin
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 API endpoint: POST /api/submit-form`);
  console.log(`📁 Static files from: ${path.join(__dirname, 'dist')}`);
  console.log('=================================');
});

console.log('✅ Registered routes:');
console.log('   - POST /api/submit-form');

export default app;
