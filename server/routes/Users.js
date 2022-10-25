require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Pets , Forumposts ,PetVaccines,PetDiaries,PetReminders,PetGallery, Users, PetMedications, Medicines,Vaccines } = require("../models");

const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require('../mailer');


router.use(bodyParser.json());

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

  router.get("/getmedicines", async (req, res) => {
    const listOfMedicines = await Medicines.findAll();
    res.json(listOfMedicines);
  });
  router.get("/getpetmeds/:id", async (req, res) => {
    const id = req.params.id;
    const listOfMedicines = await PetMedications.findAll(
      {include: {model:Medicines,required: true}},
      {where: {
        PetID: id
      }},
      
    );
    res.json(listOfMedicines);
  });

  router.get("/getpostsbyuser/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await Forumposts.findAll(
      {where: {
        userId: id
      }}
    );
    res.json(listOfPosts);
  });

  router.get("/getpostswithuser", async (req, res) => {
    const listOfPosts = await Forumposts.findAll(
      {
        include: {model:Users,required: true}
      }
    );
    res.json(listOfPosts);
  });

  router.post("/addpost", async (req, res) => {
    const { postTitle,postDescr,pcatID,userId} = req.body;  

       
    
    const forumposts = Forumposts.create({
        postTitle: postTitle,
        postDescr: postDescr,
        postStatus: "pending",
        postDate : year + "-" + month + "-" + date,
        postTime : hours + ":" + minutes,
        userId: userId,
        pcatId: pcatID,
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
  router.post("/addreminder", async (req, res) => {
    const { petID,note,nextRemDate,nextRemTime} = req.body;
    const petReminders = PetReminders.create({
        petID: petID,
        note: note,
        nextRemDate: nextRemDate,
        nextRemTime: nextRemTime,
    });
    if(petReminders){
        res.json("SUCCESS"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });
  router.post("/addpetmed", async (req, res) => {
    const { petID,medID,startDate,timesADay,days} = req.body;
    const PetMedication = PetMedications.create({
      petID:petID,
      medID:medID,
      startDate:startDate,
      timesADay:timesADay,
      days:days,
    });
    if(PetMedication){
        res.json("SUCCESS"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });

  router.post("/adddiaryentry", async (req, res) => {
    const {petID, entryTitle, Descr} = req.body;
    // const Petdiaries = petDiaries.create({
    //     petID: "1"
    // });
    const dentry = PetDiaries.create({
      
      
      entryTitle: entryTitle,
      Descr: Descr,
      petID: petID
  });
    if(dentry){
        res.json("Petdiaries"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });
  router.get("/getentries/:id", async (req, res) => {
    const id = req.params.id;
    const listOfEntries = await PetDiaries.findAll(
      {where: {
        petID: id
      }}
    );
    res.json(listOfEntries);
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

  router.post("/addpetimage", async (req, res) => {
    const { petID,ImagePath} = req.body;
    const petGallery = PetGallery.create({
        petID: petID,
        ImagePath: ImagePath,
    });
    if(petGallery){
        res.json("SUCCESS"); 
    }else{
        res.json("NOT SUCCESS"); 
    }
  });
  router.get("/getpetimages/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPetImages = await PetGallery.findAll(
      {where: {
        PetID: id
      }}
    );
    res.json(listOfPetImages);
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
      {include: {model:Vaccines,required: true}},
      {where: {
        petId: id
      }},
      
    );
    res.json(listOfPetVaccines);
  });
  router.get("/getpetreminders/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPetReminders = await PetReminders.findAll(
      {where: {
        petId: id
      }}
    );
    res.json(listOfPetReminders);
  });
  module.exports = router ;