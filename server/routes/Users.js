
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
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

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;