import nodemailer from 'nodemailer';
import express from 'express';
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@getsecurepro.com",
    pass: "2026.cSe"
  },
  tls: { rejectUnauthorized: false }
});

transporter.verify((error, success) => {
  if (error) console.log('❌ SMTP Gabim:', error.message);
  else console.log('✅ SMTP Gati!');
});

router.post('/submit-form', async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;
    
    await transporter.sendMail({
      from: '"SecurePro" <noreply@getsecurepro.com>',
      to: "noreply@getsecurepro.com",
      subject: "🔐 Regjistrim i ri - SecurePro",
      html: `<h2>Regjistrim i ri!</h2>
             <p><strong>Emri:</strong> ${name}</p>
             <p><strong>Mbiemri:</strong> ${surname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${phone}</p>`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
