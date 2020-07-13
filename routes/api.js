const express = require("express");
const router = express.Router();

router.get("/posts", (req, res, next) => {});

router.post("/posts", (req, res, next) => {});

router.get("/posts/:postID", (req, res, next) => {});

router.patch("/posts/:postID", (req, res, next) => {});

module.exports = router;
