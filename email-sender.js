import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "casson1212@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "casson1212@gmail.com",
  to: "ajabafrancis@gmail.com",
  subject: "Sending Email using Node.js",
  text: "block you are a big shot, dont give up keep pushing!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
