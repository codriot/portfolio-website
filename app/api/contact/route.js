import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

/**
 * İletişim formu verilerini işleyip email gönderen API endpoint'i
 * @param {Request} req - Form verilerini içeren POST isteği
 * @returns {NextResponse} - İşlem sonucunu içeren yanıt
 */
export async function POST(req) {
  try {
    // Form verilerinin JSON'dan çıkarılması
    const { firstName, lastName, email, phone, service, message } = await req.json();

    // Gmail SMTP sunucusu üzerinden email göndermek için transporter yapılandırması
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // .env dosyasından email adresi
        pass: process.env.EMAIL_PASS   // .env dosyasından uygulama şifresi
      }
    });

    // Gönderilecek email'in içeriğinin hazırlanması
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,  // Admin email adresi
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Email'in gönderilmesi ve Promise'in beklenmesi
    await transporter.sendMail(mailOptions);

    // Başarılı yanıtın döndürülmesi
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    // Hata durumunda loglama ve hata yanıtının döndürülmesi
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 