  
const express = require('express');
const router = express.Router();

const { signin, signup } = require("../controllers/user.js");

router.post("/signin", signin);
router.post("/signup", signup);

console.log("aa");

module.exports=router;