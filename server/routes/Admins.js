require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { Petcatagories, Breeds, Moderators, Users } = require("../models");
var us = require("./Auth");
const bcrypt = require("bcrypt");

const { sendmodConfirmationEmail } = require('../mailer');

router.use(bodyParser.json());

router.post("/addcategory", async (req, res) => {
	const { pcatName, descr } = req.body;
	// const uemail = await Users.findOne({ where: { email: email } });
	// const uname = await Users.findOne({ where: { username: username } });

	// if (uemail) res.json({ error: "Email is already registered" });
	Petcatagories.create({
		pcatName: pcatName,
		descr: descr,
	});
	res.json("SUCCESS");
});

router.post("/addbreed", async (req, res) => {
	const { breedName, descr, catId } = req.body;
	// const uemail = await Users.findOne({ where: { email: email } });
	// const uname = await Users.findOne({ where: { username: username } });

	// if (uemail) res.json({ error: "Email is already registered" });
	const chckq = Breeds.create({
		breedName: breedName,
		descr: descr,
		catId: 1,
	});
	if (chckq) {
		res.json("SUCCESS");
	} else {
		res.json("Not SUCCESS");
	}
});
router.post("/addmoderator", async (req, res) => {

	const {username , modemail} = req.body;
	const role = "moderator";
	const epassword ="Petdays123"

	// Users.create({
	// 	username: username,
	// 	email: modemail,
	// 	password: epassword,
	// 	userrole : role,
	// 	isverified : "no"
	//   });
	const usemail =await Users.findOne({ where: { email: modemail } });
	const uname =await Users.findOne({ where: { username: username} });
  
	if (usemail)
	{res.json({ error: "Email is already registered" });} 
	else if (uname)
	 {res.json({ error: "Username is already taken" });}
	else{
	  await sendmodConfirmationEmail({hash: username , usermodemail:modemail})
	bcrypt.hash(epassword, 10).then((hash) => {
	  Users.create({
		username: username,
		email: modemail,
		password: hash,
		userrole : role,
		isverified : "no"
	  });
	  res.json("SUCCESS");
	});

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
	const listOfBreeds = await Breeds.findAll({
		where: {
			catId: id,
		},
	});
	res.json(listOfBreeds);
});
router.get("/getsinglebreed/:id", async (req, res) => {
	const id = req.params.id;
	const listOfBreeds = await Breeds.findOne({
		where: {
			breedID: id,
		},
	});
	res.json(listOfBreeds);
});
router.get("/getserviceprovider", async (req, res) => {
	const listOfServiceproviders = await Users.findAll({
		where: {
			userrole: "service",
			isverified: "yes",
		},
	});
	res.json(listOfServiceproviders);
});

router.get("/getmoderators", async (req, res) => {
	const listOfModerators = await Users.findAll({
		where: {
			userrole: "moderator",
			isverified: "yes",
		},
	});
	res.json(listOfModerators);
});

//update, delete and get category

router.get("/getcategory/:id", async (req, res) => {
	const id = req.params.id;
	const listOfCategory = await Petcatagories.findByPk(id);
	res.json(listOfCategory);
});

router.post("/updatecategory", async (req, res) => {
	const { pcatID, pcatName, descr } = req.body;
	await Petcatagories.update(
		{ pcatName: pcatName, descr: descr },
		{ where: { pcatID: pcatID } }
	);
	res.json("SUCCESS");
});

router.delete("/deletecategory/:pcatID", async (req, res) => {
	const pcatID = req.params.pcatID;

	await Petcatagories.destroy({
		where: {
			pcatID: pcatID,
		},
	});
	res.json("DELETED SUCCESSFULLY");
});

router.delete("/deletebreed/:breedID", async (req, res) => {
	const breedID = req.params.breedID;

	await Breeds.destroy({
		where: {
			breedID: breedID,
		},
	});
	res.json("DELETED SUCCESSFULLY");
});

router.post("/deletemoderator/:userID", async (req, res) => {
	const userID = req.params.userID;

	await Users.update(
		{ isverified: "deleted" },
		{ where: { userID: userID } }
		
	);
	res.json("DELETED SUCCESSFULLY");
});

//update breed
router.post("/updatebreed", async (req, res) => {
	const { breedID, breedName, descr } = req.body;
	await Breeds.update(
		{ breedName: breedName, descr: descr },
		{ where: { breedID: breedID } }
	);
	res.json("SUCCESS");
});


module.exports = router;

