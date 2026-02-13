import nodemailer from 'nodemailer';
import express from 'express';

const router = express.Router();

// 🔥 KONFIGURIMI I SMTP (ZËVENDËSO KËTË PJESË)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // do të jetë smtp.hostinger.com
  port: Number(process.env.SMTP_PORT), // 465
  secure: true, // true për 465
  auth: {
    user: process.env.SMTP_USER, // noreply@getsecurepro.com
    pass: process.env.SMTP_PASS, // fjalëkalimi yt
  },
  tls: {
    rejectUnauthorized: false // opsional, ndihmon në disa raste
  }
});

// Testo lidhjen
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Error:', error.message);
  } else {
    console.log('✅ SMTP Ready!');
  }
});

// Endpoint for the form
router.post('/submit-form', async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;

    if (!name || !surname || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // 📧 ONLY email to admin (noreply@getsecurepro.com)
    await transporter.sendMail({
      from: `"SecurePro Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // noreply@getsecurepro.com
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

    // ✅ NO email to user - ONLY admin notification

    res.json({ 
      success: true, 
      message: 'Registration successful!' 
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred. Please try again.' 
    });
  }
});

export default router;