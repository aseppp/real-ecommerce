const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Access denied!" });
  }

  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token" });
  }
};
