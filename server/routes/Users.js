require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Pets } = require("../models");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require('../mailer');

router.use(bodyParser.json());

router.post("/addpet", async (req, res) => {
    const { petName, DOB ,weight, profileImage, breedId,UserID,catId} = req.body;
    const pet = Pets.create({
        petName: petName,
        DOB: DOB,
        weight: weight,
        profileImage: profileImage,
        breedId: breedId,
        UserID: UserID,
        catId: catId,
    });
    if(pet){
        res.json("SUCCESS"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });
  router.post("/updatePetImage", async (req, res) => {
    const { petName, DOB ,weight, profileImage, breedId,UserID,catId} = req.body;
    const pet = Pets.create({
        petName: petName,
        DOB: DOB,
        weight: weight,
        profileImage: profileImage,
        breedId: breedId,
        UserID: UserID,
        catId: catId,
    });
    if(pet){
        res.json("SUCCESS"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });
  
  router.get("/getpets/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPets = await Pets.findAll(
      {where: {
        UserId: id
      }}
    );
    res.json(listOfPets);
  });
  module.exports = router ;