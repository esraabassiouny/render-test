const jwt = require("jsonwebtoken");

const generateToken = (id, phoneNumber)=>jwt.sign(
    { id: id, phone: phoneNumber } ,
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
);


module.exports = generateToken;    