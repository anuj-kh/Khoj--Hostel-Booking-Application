const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const UserModal = require("../models/user.js");

const secret = 'test';

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  console.log("In signup backend");
  const { email, password, firstName, lastName } = req.body;
  console.log("in2 signup backend");
  try {
    console.log("in3 signup backend");
    const oldUser = await UserModal.findOne({ email });
    
    if (oldUser) return res.status(400).json({ message: "User already exists" });
    console.log("in5 signup backend");
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(200).json({ result, token });
    
  } catch (error) {
    console.log("in4 signup backend");
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
  console.log("ending signup backend");
};

exports.signin=signin;
exports.signup=signup;