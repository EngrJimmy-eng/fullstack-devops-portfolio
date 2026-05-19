const jwt = require("jsonwebtoken");

function auth(req, res, next) {

  // get authorization header
  const authHeader = req.headers.authorization;

  // check if token exists
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  // format: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  try {

    // verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // attach decoded user to request
    req.user = decoded;

    // continue to route
    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });

  }
}

module.exports = auth;
