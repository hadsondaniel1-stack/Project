import nodemailer from 'nodemailer';
import express from 'express';

const router = express.Router();

console.log('📧 send-email.js loaded');
console.log('📧 SMTP Config from env:', {
  host: process.env.SMTP_HOST ? '✅ Set' : '❌ Missing',
  port: process.env.SMTP_PORT ? '✅ Set' : '❌ Missing',
  user: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
  pass: process.env.SMTP_PASS ? '✅ Set' : '❌ Missing',
  receiver: process.env.RECEIVER_EMAIL ? '✅ Set' : '❌ Missing'
});

// Konfigurimi i SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,    // smtp.gmail.com
  port: Number(process.env.SMTP_PORT),  // Përdor portin 587
  secure: false,  // Përdor STARTTLS për portin 587
  auth: {
    user: process.env.SMTP_USER,  // Emaili i përdoruesit (Gmail)
    pass: process.env.SMTP_PASS,  // App password për Gmail (nëse ke 2FA aktivizuar)
  },
  tls: {
    rejectUnauthorized: false  // Përdor për të shmangur gabimet lidhur me certifikatat
  }
});

// Testo lidhjen
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Connection Error:', error.message);
    console.log('❌ Full error:', error);
  } else {
    console.log('✅ SMTP Server is ready');
  }
});

// Endpoint për formularin
router.post('/submit-form', async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;

    console.log('📝 Form data received:', { name, surname, email, phone });

    if (!name || !surname || !email || !phone) {
      console.log('❌ Validation failed: Missing fields');
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    console.log('📧 Attempting to send email...');
    console.log('📧 Using SMTP config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL
    });

    const info = await transporter.sendMail({
      from: `"SecurePro" <${process.env.SMTP_USER}>`,  // Emaili nga ku do të dërgohet
      to: process.env.RECEIVER_EMAIL,  // Emaili ku do të dërgohet formulari
      replyTo: email,  // Emaili që do të kthehet në rast përgjigje
      subject: '🔐 New Registration - SecurePro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #06b6d4; border-radius: 10px;">
          <h2 style="color: #06b6d4; text-align: center;">New SecurePro Registration</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Surname:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${surname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
            </tr>
          </table>
          <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 30px;">
            This email was sent from getsecurepro.com
          </p>
        </div>
      `
    });

    console.log('✅ Email sent successfully:', info.messageId);
    console.log('✅ Email response:', info.response);

    res.json({ 
      success: true, 
      message: 'Registration successful!' 
    });

  } catch (error) {
    console.error('❌ Email Error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred. Please try again.',
      error: error.message
    });
  }
});

export default router;
