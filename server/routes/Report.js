require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Petcatagories , Breeds ,Moderators,Vaccines,PetVaccines } = require("../models");
var us = require("./Auth");
router.use(bodyParser.json());
const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const hbs = require("handlebars");
const path = require("path");
const { QueryTypes } = require('sequelize');
// var Sequelize = require("sequelize");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'petdays',
 'root',
 '',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

// report generation

// router.post('/create-pdf', (req, res) => {
//   pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//       if(err) {
//           res.send(Promise.reject());
//       }

//       res.send(Promise.resolve());
//   });
// });

router.get('/fetchpdf', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'reports', 'basic.pdf'))
})



router.get('/createpdf', async (req, res) => {

  const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`);
    const html = await fs.readFile(filePath, 'utf8');
    return hbs.compile(html)(data);
  }; 
    try {

      // const data = await Breeds.findOne({
      //   where: { breedID: "1" },
      //    raw : true,
      // });
        const data = await Breeds.findAll(
         { raw : true,}
        );
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // console.log(data);
        const content = await compile('basic', data);
        // console.log(content)
        await page.setContent(content);
        await page.pdf({
            path: path.join(process.cwd(), 'reports', 'basic.pdf'),
            format: 'A4',
            printBackground: true
        })
        console.log("done creating pdf");
        await browser.close();
        // process.exit();
        
    } catch (e) {
        console.log(e);
    }
 

res.json("SUCCESS");
  });

  //DISPLAY VACCINE REPORT
  router.get("/getvaccinereport", async (req, res) => {
    const vacreport = await sequelize.query("SELECT vaccines.vacName,COUNT(petvaccines.petVacID) as vaccount FROM petvaccines JOIN vaccines on petvaccines.vacID=vaccines.vacID GROUP by petvaccines.vacID;", { type: QueryTypes.SELECT });
  
    res.json(vacreport);
  });

  //DISPLAY FORUMPOST REPORT
  router.get("/getpostreport", async (req, res) => {
    const postreport = await sequelize.query("SELECT forumposts.postStatus,COUNT(forumposts.postId) as pcount FROM forumposts GROUP by forumposts.postStatus;", { type: QueryTypes.SELECT });
  
    res.json(postreport);
  });

  //DISPLAY USERPOST REPORT
  router.get("/getuserreport", async (req, res) => {
    const userreport = await sequelize.query("SELECT users.userrole,COUNT(users.userID) as ucount,Month(users.createdAt) as umonth FROM users where users.userrole like 'user' GROUP by users.userrole, EXTRACT(MONTH FROM users.createdAt);", { type: QueryTypes.SELECT });
  
    res.json(userreport);
  });

  //DISPLAY SERVICERPOST REPORT
  router.get("/getservicereport", async (req, res) => {
    const servicereport = await sequelize.query("SELECT users.userrole,COUNT(users.userID) as ucount,Month(users.createdAt) as umonth FROM users where users.userrole like 'SERVICE' GROUP by users.userrole, EXTRACT(MONTH FROM users.createdAt);", { type: QueryTypes.SELECT });
  
    res.json(servicereport);
  });
  
  //DISPLAY TOTALUSERPOST REPORT
  router.get("/gettotaluserreport", async (req, res) => {
    const servicereport = await sequelize.query("SELECT COUNT(users.userID) as ucount,Month(users.createdAt) as umonth FROM users where users.userrole like 'SERVICE' or users.userrole like 'user' GROUP by EXTRACT(MONTH FROM users.createdAt);", { type: QueryTypes.SELECT });
  
    res.json(servicereport);
  });

  //DISPLAY INCOME STATEMENT
  router.get("/getincomereport", async (req, res) => {
    const incomereport = await sequelize.query("SELECT Month(publishedads.adDate) as umonth, COUNT(publishedads.adId) as adcount FROM publishedads where publishedads.paymentStatus like 'paid' GROUP by EXTRACT(MONTH FROM publishedads.adDate);", { type: QueryTypes.SELECT });
  
    res.json(incomereport);
  });


  


module.exports = router;