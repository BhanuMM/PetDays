require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require('../mailer');

router.post("/register", async (req, res) => {
  const { username, email, password ,userrole } = req.body;
  const uemail = await Users.findOne({ where: { email: email } });
  const uname = await Users.findOne({ where: { username: username } });

  if (uemail) res.json({ error: "Email is already registered" });
  if (uname) res.json({ error: "Username is already taken" });

  await sendConfirmationEmail({toUser: uemail, hash: uemail})
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
      userrole : "service",
      isVerified : "no"
    });
    res.json("SUCCESS");
  });
});


// router.post("/", async (req, res) => {
//     const user = req.body;
//     await Users.create(user);
//     res.json(user);

// });

router.post("/login", async (req, res) => {
  const {email, password } = req.body;

  const uemail = await Users.findOne({ where: { email: email } });

  if (!uemail) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, uemail.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json({ email: email, role: uemail.userrole });
  });
});

module.exports = router;