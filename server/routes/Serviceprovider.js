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
  userId : "19"

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

router.get("/getpendingads/:id", async (req, res) => {
  const id = req.params.id;
  const SingleAd= await Publishedads.findByPk(id);
  res.json(SingleAd);
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



router.get("/getalladsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    // {
    //   where: {
    //     userId: "1",
    //   },
    // }
  );
  res.json(listOfpendingads);
});

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
router.get("/getpendingadsuser/:id", async (req, res) => {
  const id = req.params.id;
  const SingleAd= await Publishedads.findByPk(id);
  res.json(SingleAd);
});
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

router.post("/updatependingad/:id", async (req, res) => {
  const id = req.params.id;
  

  await Publishedads.update({adStatus :"approved"} ,{ where: { adID: id }} );
 
  res.json("SUCCESS"); 
});

router.post("/updaterejectedad/:id", async (req, res) => {
  const id = req.params.id;
  const chckq= await Publishedads.update({adStatus :"rejected"} ,{ where: { adID: id }} );
   

    if(chckq){
      await Rejectedads.create({
        rejReason : "This ad is rejected bcz no img",
        adId : id
      });
      res.json("Ad SUCCESS");
    }else{
      res.json("Ad Not SUCCESS");
    }
  
});






// deletes------------
// router.delete("/deletemed/:medId", async (req, res) => {
//   const medId = req.params.medId;

//   await Medicines.destroy({
//     where: {
//       medID: medId,
//     },
//   });
//   res.json("DELETED SUCCESSFULLY");
// });


module.exports = router;