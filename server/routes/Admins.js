require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Petcatagories , Breeds ,Moderators } = require("../models");
var us = require("./Users")

router.use(bodyParser.json());


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
  const { firstName,lastName,conNum,uemail,modNIC,username,password } = req.body;
  
 const chckq = Moderators.create({
    firstName: firstName,
    lastName: lastName,
    conNum: conNum,
    modEmail:uemail,
    modNIC:modNIC

  });
  const role = "moderator";
  const chck2 =us.registerUser(req, res ,role);
  if(chck2){
    res.json("Mod SUCCESS");
  }else{
    res.json("Not SUCCESS");
  }
  
});

router.get("/getpetcategories", async (req, res) => {
  const listOfPetcatagories = await Petcatagories.findAll();
  res.json(listOfPetcatagories);
});
router.get("/getpetbreeds", async (req, res) => {
  const listOfBreeds = await Breeds.findAll();
  res.json(listOfBreeds);
});
router.get("/getpetbreeds/:id", async (req, res) => {
  const id = req.params.id;
  const listOfBreeds = await Breeds.findAll(
    {where: {
      catId: id
    }}
  );
  res.json(listOfBreeds);
});
router.get("/getserviceproviders", async (req, res) => {
  const listOfServiceproviders = await Users.findAll(
    {where: {
      userrole: "service",
      isverified :"yes"
    }}
  );
  res.json(listOfServiceproviders);
});
router.get("/getmoderators", async (req, res) => {
  const listOfModerators = await Moderators.findAll();
  res.json(listOfModerators);
});



module.exports = router;