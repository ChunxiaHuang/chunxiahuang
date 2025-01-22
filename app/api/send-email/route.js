// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: process.env.EMAIL_SERVICE,// 或者使用其他邮件服务
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });
//     console.log(process.env.EMAIL_USER);
//     transporter.verify((error, success) => {
//         if (error) {
//           console.log("Transporter Error:", error);
//         } else {
//           console.log("Transporter is working:", success);
//         }
//       });
      

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO, // 替换为你的邮箱
//       subject: `New Message from ${name}`,
//       text: message,
//       replyTo: email, // 用户邮箱作为回复地址
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("Request received at API.");

    const body = await req.json();
    console.log("Request body:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.error("Validation failed: Missing required fields.");
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    console.log("All fields are present. Preparing to send email...");

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
      
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Loaded" : "Not Loaded");
    console.log("EMAIL_SERVICE:", process.env.EMAIL_SERVICE);
    console.log("EMAIL_TO:", process.env.EMAIL_TO);


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
