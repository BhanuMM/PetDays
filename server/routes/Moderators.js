require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Medicines ,Dietplans, Vitamins , Vaccines} = require("../models");
const vitamins = require('../models/vitamins');
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
router.post("/addvitamin", async (req, res) => {
  const { vitName,vitType, descr } = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  Vitamins.create({
    vitName: vitName,
    vitType: vitType,
    descr: descr
  });
  res.json("SUCCESS"); 
});
router.post("/addvaccine", async (req, res) => {
  const { vacName, descr ,vacNextIter} = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
  Vaccines.create({
    vacName: vacName,
     descr: descr,
     vacNextIter: vacNextIter,
  });
  res.json("SUCCESS"); 
});

router.post("/adddietplan", async (req, res) => {
  const { planName,planDescr, ageRangeFrom,ageRangeTo , weightRangeFrom,weightRangeTo, breedId,catId} = req.body;
  // const uemail = await Users.findOne({ where: { email: email } });
  // const uname = await Users.findOne({ where: { username: username } });

  // if (uemail) res.json({ error: "Email is already registered" });
 const chckq = Dietplans.create({
  planName: planName,
  planDescr: planDescr,
  ageRangeFrom: ageRangeFrom,
  ageRangeTo: ageRangeTo,
  weightRangeFrom: weightRangeFrom,
  weightRangeTo: weightRangeTo,
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