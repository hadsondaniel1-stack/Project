import express from 'express';
import cors from 'cors';
import emailRouter from './api/send-email.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', emailRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
