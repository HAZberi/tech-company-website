const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {name, email, phone, message} = request.query;
    let mailOptions = {
      from: "Beri Technologies",
      to: "mhazuberi@gmail.com",
      subject: "Message Received!",
      html: `<p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">From: ${email}</p>
      <p style="font-size: 16px">From: ${phone}</p> 
      <p style="font-size: 16px">From: ${message}</p> `,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) response.send(error);
      else response.send("Message sent successfully");
    });

    mailOptions = {
      from: "Beri Technologies",
      to: email,
      subject: "We have received your message.",
      // html email template to be replaced......
      html: `<p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">From: ${email}</p>
      <p style="font-size: 16px">From: ${phone}</p> 
      <p style="font-size: 16px">From: ${message}</p> `,
    };
  });
});
