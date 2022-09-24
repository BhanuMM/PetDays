require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Pets , Forumposts ,PetVaccines } = require("../models");

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

  router.get("/getposts", async (req, res) => {
    const listOfPosts = await Forumposts.findAll(
    );
    res.json(listOfPosts);
  });

  router.post("/addpost", async (req, res) => {
    const { postTitle,postDescr,pcatId} = req.body;  

        let date_ob = new Date();

        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year
        let year = date_ob.getFullYear();
        
        // current hours
        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
    
    const forumposts = Forumposts.create({
        postTitle: postTitle,
        postDescr: postDescr,
        postStatus: "pending",
        postDate : year + "-" + month + "-" + date,
        postTime : hours + ":" + minutes,
        userId: "1",
        pcatId: pcatId,
    });
    if(forumposts){
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