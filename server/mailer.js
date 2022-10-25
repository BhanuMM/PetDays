require('dotenv').config();
const nodemailer = require('nodemailer');

const guser = process.env.GOOGLE_USER;
const gpass = process.env.GOOGLE_PASSWORD;

exports.sendmodConfirmationEmail = function({hash, usermodemail}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: guser,
        pass: gpass
      }
    })

    const message = {
      from: process.env.GOOGLE_USER,
      to: usermodemail, // in production uncomment this
      // to: process.env.GOOGLE_USER,
      subject: 'Pet Days - Activate Moderator Account',
      html: `
        <h3> Hello ${hash},  </h3>
        <p>Welcome to Pet Days.  Just one last step is laying ahead of you...</p>
        <p>To activate your moderator account please follow this link: <a target="_" href="${process.env.SERVER}/auth/activate/${hash}">Activate Now</a></p>
        <p>password : Petdays123</p>
        <p>Cheers</p>
        <p>Petdays Team</p>
      `
    }

    transporter.sendMail(message, function(err, info) {
      if (err) {
        rej(err)
      } else {
        res(info)
      }
    })
  })
}
exports.sendConfirmationEmail = function({hash, useremail}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: guser,
        pass: gpass
      }
    })

    const message = {
      from: process.env.GOOGLE_USER,
      to: useremail, // in production uncomment this
      // to: process.env.GOOGLE_USER,
      subject: 'Pet Days - Activate Account',
      html: `
        <h3> Hello ${hash},  </h3>
        <p>Thank you for registering into Pet Days. Much Appreciated! Just one last step is laying ahead of you...</p>
        <p>To activate your account please follow this link: <a target="_" href="${process.env.SERVER}/auth/activate/${hash}">Activate Now</a></p>
        <p>Cheers</p>
        <p>Petdays Team</p>
      `
    }

    transporter.sendMail(message, function(err, info) {
      if (err) {
        rej(err)
      } else {
        res(info)
      }
    })
  })
}