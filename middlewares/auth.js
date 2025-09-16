const jwt = require("jsonwebtoken");

const protect = async(req, res, next) => {
  let token = req.headers.authorization;

 if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is invalid or expired" });
  }
};

module.exports = protect;
