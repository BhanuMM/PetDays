require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Medicines ,Dietplans, Vitamins , Vaccines, Petcatagories ,Breeds} = require("../models");
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

router.post("/addpost", async (req, res) => {
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



router.get("/getmedicines", async (req, res) => {
  const listOfMedicines = await Medicines.findAll();
  res.json(listOfMedicines);
});

router.get("/getvaccines", async (req, res) => {
  const listOfVaccines = await Vaccines.findAll();
  res.json(listOfVaccines);
});
router.get("/getvitamins", async (req, res) => {
  const listOfVitamins = await Vitamins.findAll();
  res.json(listOfVitamins);
});

router.get("/getdietplans", async (req, res) => {
  const listOfDietplans = await Dietplans.findAll(
    {
      include: { 
        model:Breeds ,
         required: true,
         include: [{model: Petcatagories  , required: true }]
        },
        
    }
  );
  res.json(listOfDietplans);
});

router.get("/getmedicines/:id", async (req, res) => {
  const id = req.params.id;
  const SingleMed = await Medicines.findByPk(id);
  res.json(SingleMed);
  // const SingleMed = await Medicines.findOne(
  //   {where: {
  //     medID: id
  //   }}
  // );
  // res.json(SingleMed);
});

router.get("/getvitamins/:id", async (req, res) => {
  const id = req.params.id;
  const SingleVit = await Vitamins.findByPk(id);
  res.json(SingleVit);
  // const SingleVit = await Vitamins.findOne(
  //   {where: {
  //     vitID: id
  //   }}
  // );
  // res.json(SingleVit);
});
router.get("/getvaccines/:id", async (req, res) => {
  const id = req.params.id;
  const SingleVac = await Vaccines.findByPk(id);
  res.json(SingleVac);
  // const SingleVac = await Vaccines.findOne(
  //   {where: {
  //     vacID: id
  //   }}
  // );
  // res.json(SingleVac);
});
//updates----------

router.post("/updatemedicine", async (req, res) => {
  
  const { medID,medName, descr } = req.body;

  await Medicines.update({medName :medName ,descr :descr} ,{ where: { medID: medID }} );
 
  res.json("SUCCESS"); 
});

router.post("/updatevitamin", async (req, res) => {
  
  const { vitID,vitName,vitType, descr } = req.body;

  await Vitamins.update({vitName :vitName ,vitType :vitType ,descr :descr} ,{ where: { vitID: vitID }} );
 
  res.json("SUCCESS"); 
});

router.post("/updatevaccine", async (req, res) => {
  
  const { vacID,vacName,descr,vacNextIter } = req.body;

  await Vaccines.update({vacName :vacName ,descr :descr,vacNextIter :vacNextIter } ,{ where: { vacID: vacID }} );
 
  res.json("SUCCESS"); 
});






// deletes------------
router.delete("/deletemed/:medId", async (req, res) => {
  const medId = req.params.medId;

  await Medicines.destroy({
    where: {
      medID: medId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

router.delete("/deletevit/:vitId", async (req, res) => {
  const vitId = req.params.vitId;

  await Vitamins.destroy({
    where: {
      vitID: vitId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

router.delete("/deletevacc/:vacId", async (req, res) => {
  const vacId = req.params.vacId;

  await Vaccines.destroy({
    where: {
      vacID: vacId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;