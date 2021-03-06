const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Get all posts
router.get("/posts", (req, res, next) => {
  Post.find({}, null, { sort: { time: -1 } })
    .then((data) => res.json(data))
    .catch(next);
});

// Add new post
router.post("/posts", (req, res, next) => {
  if (req.body.content) {
    Post.create({
      content: req.body.content,
      comments: [],
      time: new Date(),
    });
  } else {
    res.json({
      error: "Please try again",
    });
  }
});

// Get specific post
router.get("/posts/:postID", (req, res, next) => {
  Post.findById(req.params.postID)
    .then((data) => res.json(data))
    .catch(next);
});

// Add new comment
router.patch("/posts/:postID/comment", (req, res, next) => {
  if (req.body.content) {
    Post.findByIdAndUpdate(
      req.params.postID,
      {
        $push: {
          comments: { body: req.body.content, date: new Date() },
        },
      },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.send("Error: Empty comment");
  }
});

// Upvote a post
router.patch("/posts/:postID/upvote", (req, res, next) => {
  Post.findByIdAndUpdate(
    req.params.postID,
    {
      $inc: {
        votes: 1,
      },
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch(next);
});

// Downvote a post
router.patch("/posts/:postID/downvote", (req, res, next) => {
  Post.findByIdAndUpdate(
    req.params.postID,
    {
      $inc: {
        votes: -1,
      },
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
