import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 KONFIGURIMI I SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@getsecurepro.com",
    pass: "Securepro2026."  // ← NDRYSHO!
  },
  tls: { rejectUnauthorized: false }
});

// ✅ TEST LIDHJES
transporter.verify((error, success) => {
  if (error) console.log('❌ SMTP Gabim:', error.message);
  else console.log('✅ SMTP Gati!');
});

// 📨 API ENDPOINT
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;
    
    await transporter.sendMail({
      from: '"SecurePro" <noreply@getsecurepro.com>',
      to: "noreply@getsecurepro.com",
      subject: "Regjistrim i ri",
      html: `<h2>Të dhënat:</h2>
             <p>Emri: ${name}</p>
             <p>Mbiemri: ${surname}</p>
             <p>Email: ${email}</p>
             <p>Telefon: ${phone}</p>`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));