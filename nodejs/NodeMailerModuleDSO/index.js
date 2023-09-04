const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dso.traning.xuanhoa@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "dso.traning.xuanhoa@gmail.com",
  to: "dso.intern.xuanhoa@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (err, info) =>
  err ? console.log(err) : console.log(info)
);
