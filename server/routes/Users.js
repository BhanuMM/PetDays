require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require('../mailer');

router.use(bodyParser.json());

router.post("/register", async (req, res) => {
  const { username, email, password ,userrole } = req.body;
  const uemail = await Users.findOne({ where: { email: email } });
  const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  if (uname) {res.json({ error: "Username is already taken" });}
  else{
  await sendConfirmationEmail({hash: username , email:email})
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
      userrole : "user",
      isverified : "no"
    });
    res.json("SUCCESS");
  });
}
  
  
});
router.post("/sellerregister", async (req, res) => {
  const { username, email, password ,userrole } = req.body;
  const uemail = await Users.findOne({ where: { email: email } });
  const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  if (uname) {res.json({ error: "Username is already taken" });}
  else{
  await sendConfirmationEmail({hash: username , email:email})
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
      userrole : "service",
      isverified : "no"
    });
    res.json("SUCCESS");
  });
}
  
  
});

router.get('/activate/:hash', async (req, res) => {
  const { hash } = req.params;
  // var hash = req.params.hash;
  // res.json({message: `User ${hash} has been activated`})
  try {
    const uname = await Users.findOne({ where: { username: hash } });
    // const user = await PendingUser.findOne({_id: hash});
    await Users.update({isverified : 'yes'} ,{ where: { username: uname.username }} );
    // res.json({message: `User has been activated`})
    res.redirect('http://localhost:3000/signin');
  } catch {
    res.status(422).send('User cannot be activated!');
  }
  return res.redirect('http://localhost:3000/signin');
});



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