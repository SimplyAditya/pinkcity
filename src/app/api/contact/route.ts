import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
    console.log('Sending email to:', email);
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: `"PinkCity" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #FE5E85; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0;">PinkCity</h1>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have received a new message from your website contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">First Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Last Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${lastName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f4f4f4; color: #666; padding: 20px; text-align: center; font-size: 12px;">
          <p>This email was sent from the contact form on your PinkCity website.</p>
        </div>
      </div>
    `,
    };

    const userMailOptions = {
      from: `"PinkCity" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting PinkCity!',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #FE5E85; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0;">PinkCity</h1>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #333;">Thank you for contacting us, ${firstName}!</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here is a copy of your message:</p>
          <div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; margin-top: 20px;">
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
        <div style="background-color: #f4f4f4; color: #666; padding: 20px; text-align: center; font-size: 12px;">
          <p>&copy; ${new Date().getFullYear()} PinkCity MouthFresheners. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
