require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Forumposts,Comments } = require("../models");

router.get("/getpost/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts= await Forumposts.findByPk(id);
    res.json(listOfPosts);
  });

  router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where: { postId: postId } });
    res.json(comments);
  });
  
  router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
  });

  router.delete("/deletecom/:id", async (req, res) => {
    const comid = req.params.id;
  
    await Comments.destroy({
      where: {
        id: comid,
      },
    });
    res.json("DELETED SUCCESSFULLY");
  });
  
router.get("/getcomment/:postId", async (req, res) => {
  const postId = req.params.postId;
  const listOfComments= await Comments.findAll({ where: { postId: postId } });
  res.json(listOfComments);
});

router.get("/getsinglecomment/:id", async (req, res) => {
  const id = req.params.id;
  const listOfComments= await Comments.findAll({ where: { id: id } });
  res.json(listOfComments);
});

router.post("/updatecomment", async (req, res) => {
  const { commentId,commentBody} = req.body;     
  await Comments.update({
      commentBody: commentBody,      
  },{where:{id: commentId}});
  res.json("SUCCESS");
});

module.exports = router;