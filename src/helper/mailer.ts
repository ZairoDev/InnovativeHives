import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const sendContactEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zairo.developer@gmail.com",
        pass: "gwlz rnrv gpio uzcp",
      },
    });

    const text = `
      Name: ${name} 
      Email: ${email} 
      Message: ${message}`;

    // Set up email options
    const mailOptions = {
      from: `No Reply <no-reply@yourdomain.com>`,
      to: "zairo.international@gmail.com",
      subject: "Contact Form Submission",
      text: text,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending no-reply email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};
