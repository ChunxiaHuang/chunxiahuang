import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.error("Validation failed: Missing required fields.");
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        host: "smtp.gmail.com", // 使用 Gmail 的 SMTP 地址
        port: 587,             // SMTP 端口
        secure: false,         // 使用 STARTTLS 而不是 SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    transporter.verify((error, success) => {
        if (error) {
          console.error("SMTP Configuration Error:", error);
        } else {
          console.log("SMTP is ready to send emails:", success);
        }
      });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET() {
    return new Response(
      JSON.stringify({ message: "This endpoint only supports POST requests." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
