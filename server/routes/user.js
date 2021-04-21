  
const express = require('express');
const router = express.Router();

const { signin, signup, gSignin } = require("../controllers/user.js");

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/gSignin", gSignin);
module.exports=router;