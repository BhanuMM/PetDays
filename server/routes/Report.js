require('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { Petcatagories , Breeds ,Moderators } = require("../models");
var us = require("./Auth");
router.use(bodyParser.json());
const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const hbs = require("handlebars");
const path = require("path");


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




module.exports = router;