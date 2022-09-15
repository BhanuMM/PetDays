require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Medicines ,Dietplans, Vitamins , Vaccines, Petcatagories ,Breeds ,Publishedads} = require("../models");
const vitamins = require('../models/vitamins');
// const breeds = require('../models/breeds');

router.use(bodyParser.json());


router.post("/publishad", async (req, res) => {
  const { adTitle,adDescr,adPrice,adContact,adEmail,adAddress,adProvince,adDistrict,userId } = req.body;
  

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

 const chckq = Publishedads.create({
  adTitle : adTitle,
  adDescr : adDescr,
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

  });
  if(chckq){
    res.json("Ad SUCCESS");
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

router.get("/getalladsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        userId: "1",
      },
    }
  );
  res.json(listOfpendingads);
});

router.get("/getpendingadsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "pending", userId: "1",
      },
    }
  );
  res.json(listOfpendingads);
});
router.get("/getrejectedadsuser", async (req, res) => {
  const listOfpendingads = await Publishedads.findAll(
    {
      where: {
        adStatus: "rejected", userId: "1",
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