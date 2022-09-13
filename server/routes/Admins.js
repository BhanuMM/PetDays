require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Petcatagories , Breeds ,Moderators } = require("../models");
var us = require("./Users")
// const breeds = require('../models/breeds');

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
  if(chckq){
    // const role = "moderator";
    // const userreg = us.registerUser(req, res ,role);
    
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



module.exports = router;