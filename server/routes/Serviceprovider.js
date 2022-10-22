require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Medicines ,Dietplans, Vitamins , Vaccines, Petcatagories ,Breeds ,Publishedads,Rejectedads} = require("../models");
const vitamins = require('../models/vitamins');
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "./uploads/"});
var fs = require("fs");

router.use(bodyParser.json());
router.use(cors());

router.use("/static", express.static("uploads"));

router.post("/uploadphoto", upload.single("file"), async (req, res) => {
  
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename+"."+fileType;
  console.log("newFileName", newFileName)
  fs.rename(`./uploads/${req.file.filename}`,`./uploads/${newFileName}`,async function  () {
    await Publishedads.update({adImage : newFileName} ,{ where: { adID: "1" }} );
      res.send("200");
    }
  )
 
});



router.post("/publishad", async (req, res) => {
  const { adTitle,adDescr,adImage,adPrice,adContact,adEmail,adAddress,adProvince,adDistrict,userId } = req.body;
  

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

 const chckq = Publishedads.build({
  adTitle : adTitle,
  adDescr : adDescr,
  adImage : adImage ,
  adPrice : adPrice,
  adContact : adContact,
  adEmail : adEmail,
  adAddress : adAddress,
  adProvince : adProvince,
  adDistrict : adDistrict,
  adStatus : "pending",
  adDate : year + "-" + month + "-" + date,
  adTime : hours + ":" + minutes,
  userId : "1"

  },
  { isNewRecord: true });
  await chckq.save();

  if(chckq){
    res.json(chckq.adId);
  }else{
    res.json("Ad Not SUCCESS");
  }
  
});


router.get("/getpendingads", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "pending",
      },
    }
  );
  res.json(listOfpendingads);
});


router.get("/getverifiedads", async (req, res) => {
  const listOfverifiedads = await Publishedads.findAll(
    {
      where: {
        adStatus: "pending",
      },
    }
  );
  res.json(listOfverifiedads);
});
router.get("/getpendingads/:id", async (req, res) => {
  const id = req.params.id;
  const listOfAds= await Publishedads.findByPk(id);
  res.json(listOfAds);
});
// router.get("/getverifiedads/:id", async (req, res) => {
//   const id = req.params.id;
//   const listOfAds= await Publishedads.findByPk(id);
//   res.json(listOfAds);
// });



router.get("/getad/:id", async (req, res) => {
  const id = req.params.id;
  const SingleAd = await SingleAd.findByPk(id);
  res.json(SingleAd);
  // const SingleAd = await aSingleAdcines.findOne(
  //   {where: {
  //     aSingleAdID: id
  //   }}
  // );
  // res.json(SingleAd);
});
//for user

//petmart view ads
router.get("/getpetmartads", async (req, res) => {
  const listOfapprovedads = await Publishedads.findAll(
    {
      where: {
        adStatus: "approved",
      },
    }
  );
  res.json(listOfapprovedads);
});

router.get("/viewad/:id", async (req, res) => {
  const id = req.params.id;
  const listOfAds= await Publishedads.findByPk(id);
  res.json(listOfAds);
});




//DISPLAY ALL ADS CARDS
router.get("/getalladsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
   
  );
  res.json(listOfpendingads);
});
 
//DISPLY PENDING ADS CARDS
router.get("/getpendingadsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "pending",
      },
    }
  );
  res.json(listOfpendingads);
});
//DISPLAY REJECTED ADS CARDS
router.get("/getrejectedadsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "rejected", 
        // userId: "1",
      },
    }
  );
  res.json(listOfpendingads);
});

//DISPLAY APPROVED ADS CARDS
router.get("/getacceptedadsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "verified",
      },
    }
  );
  res.json(listOfpendingads);
});

//DISPLAY SINGLE AD AFTER PRESSING VIEW BURRON IN AD CARD
router.get("/getadview/:id", async (req, res) => {
  const id = req.params.id;
  const listOfAds= await Publishedads.findByPk(id);
  res.json(listOfAds);
});

 // UPDATES.........


  //UPDATE ADVERTIESMENTNT
router.post("/updatead", async (req, res) => {
  
  const {adTitle,adId,adDescr,adImage,adPrice,adContact,adEmail,adAddress,adProvince,adDistrict,adStatus} = req.body;

  await Publishedads.update({ adTitle :adTitle,adDescr :adDescr ,adImage :adImage ,adPrice :adPrice ,adContact :adContact ,adEmail :adEmail ,adAddress :adAddress ,adProvince :adProvince ,adDistrict : adDistrict, adStatus : "pending"} ,{ where: { adId: adId }} );
 
  res.json("SUCCESS"); 
});

// router.post("/updatead", async (req, res) => {
  
//   const {adTitle,adId} = req.body;

//   await Publishedads.update({ adTitle :adTitle} ,{ where: { adId: adId }} );
//   console.log(req.body);
 
//   res.json("SUCCESS"); 
// });



// router.get("/getdietplans", async (req, res) => {
//   const listOfDietplans = await Dietplans.findAll(
//     {
//       include: { 
//         model:Breeds ,
//          required: true,
//          include: [{model: Petcatagories  , required: true }]
//         },
        
//     }
//   );
//   res.json(listOfDietplans);
// });

// router.get("/getmedicines/:id", async (req, res) => {
//   const id = req.params.id;
//   const SingleMed = await Medicines.findByPk(id);
//   res.json(SingleMed);
// });



//updates----------

// router.post("/updatependingad/:id", async (req, res) => {
//   const id = req.params.id;
  

//   await Publishedads.update({adStatus :"approved"} ,{ where: { adID: id }} );
 
//   res.json("SUCCESS"); 
// });

// router.post("/spupdatead", async (req, res) => {

//   const { adId,adTitle,adDescr, adPrice, adContact,adEmail,adAddress,adProvince, adDistrict} = req.body;

//   await Publishedads.update({adId :adId ,adTitle :adTitle,adDescr :adDescr,adPrice :adPrice,adContact :adContact,adEmail :adEmail,adAddress :adAddress,adProvince :adProvince,adDistrict :adDistrict} ,{ where: { adId: adId }} );
 
//   res.json("SUCCESS"); 
// });

// router.post("/updaterejectedad/:id", async (req, res) => {
//   const id = req.params.id;
//   const chckq= await Publishedads.update({adStatus :"rejected"} ,{ where: { adID: id }} );
   

//     if(chckq){
//       await Rejectedads.create({
//         rejReason : "This ad is rejected bcz no img",
//         adId : id
//       });
//       res.json("Ad SUCCESS");
//     }else{
//       res.json("Ad Not SUCCESS");
//     }
  
// });






// deletes------------

 //DELETE APPROVED PENDING REJECTED AND ALL ADS
router.delete("/deletead/:adId", async (req, res) => {
  const adId = req.params.adId;

  await Publishedads.destroy({
    where: {
      adId: adId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});



module.exports = router;