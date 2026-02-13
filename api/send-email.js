import nodemailer from 'nodemailer';
import express from 'express';

const router = express.Router();

// Konfigurimi i SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Testo lidhjen në startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Connection Error:', error.message);
  } else {
    console.log('✅ SMTP Server is ready');
  }
});

// Endpoint for the form
router.post('/submit-form', async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;

    // Validimi
    if (!name || !surname || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    console.log('📧 Attempting to send email...');
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      receiver: process.env.RECEIVER_EMAIL
    });

    // Dërgo email-in
    const info = await transporter.sendMail({
      from: `"SecurePro" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
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

    res.json({ 
      success: true, 
      message: 'Registration successful!' 
    });

  } catch (error) {
    console.error('❌ Email Error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred. Please try again.' 
    });
  }
});

export default router;