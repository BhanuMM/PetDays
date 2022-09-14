require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require('../mailer');

router.use(bodyParser.json());

router.post("/addpet", async (req, res) => {
    const { petName, DOB ,weight, profileImage, breedId,UserID,catId} = req.body;
    // const uemail = await Users.findOne({ where: { email: email } });
    // const uname = await Users.findOne({ where: { username: username } });
  
    // if (uemail) res.json({ error: "Email is already registered" });
    Pets.create({
        petName: petName,
        DOB: DOB,
        weight: weight,
        profileImage: profileImage,
        breedId: breedId,
        UserID: UserID,
        catId: catId,
    });
    res.json("SUCCESS"); 
  });
  