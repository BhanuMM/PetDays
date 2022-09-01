require('dotenv').config();
const express = require("express");
const router = express.Router();
// const bodyParser = require('body-parser');
const { Petcatagories } = require("../models");

// router.use(bodyParser.json());


router.post("/addcategory", async (req, res) => {
  const { pcatName, descr } = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  Petcatagories.create({
    pcatName: pcatName,
    descr: descr
  });
  res.json("SUCCESS");
//   if (uname) {res.json({ error: "Username is already taken" });}
//   else{
//   await sendConfirmationEmail({hash: username , email:email})
//   bcrypt.hash(password, 10).then((hash) => {
//     Users.create({
//       username: username,
//       email: email,
//       password: hash,
//       userrole : "service",
//       isVerified : "no"
//     });
//     res.json("SUCCESS");
//   });
// }
  
  
});







module.exports = router;