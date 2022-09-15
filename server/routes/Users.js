require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Pets } = require("../models");
const { PetVaccines } = require("../models");
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

  router.post("/addvaccine", async (req, res) => {
    const { petID, vacID ,note, nextVacDate} = req.body;
    const petVaccines = PetVaccines.create({
        petID: petID,
        vacID: vacID,
        note: note,
        nextVacDate: nextVacDate,
    });
    if(petVaccines){
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
        res.json(pet.toJSON); 
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
  router.get("/getpetvaccines/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPetVaccines = await PetVaccines.findAll(
      {where: {
        petId: id
      }}
    );
    res.json(listOfPetVaccines);
  });
  module.exports = router ;