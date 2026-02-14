import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import emailRouter from './api/send-email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080; // Railway përdor port 8080

// Middleware për CORS - lejon të gjitha metodat
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Për preflight requests (OPTIONS)
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log çdo kërkese që vjen
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  console.log('📦 Headers:', req.headers);
  if (req.method === 'POST') {
    console.log('📦 Body:', req.body);
  }
  next();
});

// API Routes - REGJISTROHET KETU!
app.use('/api', emailRouter);

// Shërbe skedarët statikë nga dist (pasi Vite build)
app.use(express.static(path.join(__dirname, 'dist')));

// Për çdo rrugë tjetër, dërgo index.html (për React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Nis serverin
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 API endpoint: POST /api/submit-form`);
  console.log(`📁 Static files served from: ${path.join(__dirname, 'dist')}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
  console.log('=================================');
});

// Për testim - shfaq rrugët e regjistruara
console.log('✅ Registered routes:');
console.log('   - POST /api/submit-form');

export default app;