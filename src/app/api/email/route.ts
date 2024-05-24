import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: true,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      to: email,

      subject: `Вам сообщение от ${name}`,

      html: `
        <h2>Вам письмо!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Успех!!" }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);

    return NextResponse.json(
      { message: "Произошла непредвиденная ошибка при отправки письма!" },
      { status: 500 },
    );
  }
}
