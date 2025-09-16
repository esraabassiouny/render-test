const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateToken')

exports.signupUser = (req, res, next)=>{
    const user = req.body;
    User.create(user)
    .then(()=>{
        res.status(201).json({ data: user, message: "User added in DB successfuly" });
    })
    .catch((err)=>{
        console.log(err.message);
        res.status(500).json({ error: "Something went wrong" });
    })
}

exports.loginUser = async (req, res, next)=>{
    const { email, password } = req.body;
    if(!email || !password)
    {
        return res.status(400).json({ message: "Missing Email or Password" });
    }
    const user = await User.findOne({ email: email });
    if(!user)
        return res.status(400).json({ message: "Invalid Email or Password" });

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid)
        return res.status(400).json({ message: "Invalid Email or Password" });

    const token = generateToken(user._id, user.phoneNumber);
    res.status(200).json({token: token, message: "Logged in Successfuly"});

}

