require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Medicines ,Dietplans} = require("../models");
// const breeds = require('../models/breeds');

router.use(bodyParser.json());


router.post("/addmedicine", async (req, res) => {
  const { medName, descr } = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  Medicines.create({
    medName: medName,
    descr: descr
  });
  res.json("SUCCESS");

  
  
});

router.post("/adddietplan", async (req, res) => {
  const { planName,planDescr, ageRange , weightRange, breedId,catId} = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
 const chckq = Dietplans.create({
  planName: planName,
  planDescr: planDescr,
  ageRange: ageRange,
  weightRange: weightRange,
  breedId: breedId,
  catId: catId

  });
  if(chckq){
    res.json("SUCCESS");
  }else{
    res.json("Not SUCCESS");
  }
  
});
router.post("/addmoderator", async (req, res) => {
  const { firstName,lastName,conNum,uemail,modNIC,username,password } = req.body;
  
 const chckq = Moderators.create({
    firstName: firstName,
    lastName: lastName,
    conNum: conNum,
    modEmail:uemail,
    modNIC:modNIC

  });
  if(chckq){
    // const role = "moderator";
    // const userreg = us.registerUser(req, res ,role);
    
    res.json("Mod SUCCESS");
  }else{
    res.json("Not SUCCESS");
  }
  
});






module.exports = router;