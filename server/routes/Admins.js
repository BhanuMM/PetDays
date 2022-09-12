require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Petcatagories , Breeds ,Moderators } = require("../models");
const registerUser = require("./Users.js")
// const breeds = require('../models/breeds');

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

  
  
});

router.post("/addbreed", async (req, res) => {
  const { breedName,descr, catId } = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
 const chckq = Breeds.create({
    breedName: breedName,
    descr: descr,
    catId: catId

  });
  if(chckq){
    res.json("SUCCESS");
  }else{
    res.json("Not SUCCESS");
  }
  
});
router.post("/addmoderator", async (req, res) => {
  const { firstName,lastName,conNum,modEmail,modNIC } = req.body;
  
 const chckq = Moderators.create({
    firstName: firstName,
    lastName: lastName,
    conNum: conNum,
    modEmail:modEmail,
    modNIC:modNIC

  });
  if(chckq){
    res.json("SUCCESS");
  }else{
    res.json("Not SUCCESS");
  }
  
});






module.exports = router;