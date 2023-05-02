var express = require("express");
var router = express.Router();

var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

router.post("/contact-me", function (req, res) {
  const { from, to, subject, text } = req.body;

  const mailOptions = {
    from,
    to,
    subject,
    text: `${text}\n Sent by ${from}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json(error);
    }
    res.json(info);
  });
});

module.exports = router;
