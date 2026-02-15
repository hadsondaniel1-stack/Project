import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

console.log("📧 send-email.js loaded");

console.log("📧 SMTP Config from env:", {
  host: process.env.SMTP_HOST || "❌ Missing",
  port: process.env.SMTP_PORT || "❌ Missing",
  user: process.env.SMTP_USER || "❌ Missing",
  pass: process.env.SMTP_PASS ? "✅ Set" : "❌ Missing",
  receiver: process.env.RECEIVER_EMAIL || "❌ Missing",
});


// ✅ HOSTINGER SMTP CONFIG
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // port 465 → TRUE
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// ✅ Test connection on start
transporter.verify((err) => {
  if (err) {
    console.error("❌ SMTP ERROR:", err.message);
  } else {
    console.log("✅ SMTP READY");
  }
});


// ✅ FORM ROUTE
router.post("/submit-form", async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;

    if (!name || !surname || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    console.log("📨 Sending email with data:", {
      name,
      surname,
      email,
      phone,
    });

    const info = await transporter.sendMail({
      from: `"SecurePro Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: "🔐 New SecurePro Lead",
      html: `
        <h2>New SecurePro Registration</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Surname:</b> ${surname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    console.log("✅ EMAIL SENT:", info.messageId);

    res.json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Email failed",
      error: err.message,
    });
  }
});

export default router;
