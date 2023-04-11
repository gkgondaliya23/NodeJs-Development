const express = require("express");
const verify = require("../middleware/middleware")

const module1 = express.Router();

module1.get("/", verify, (req, res) => {
  res.json({ msg: "Welcome to Module 1 using middleware..." });
});

module.exports = module1;