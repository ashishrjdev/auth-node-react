const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authMiddleware = async (req, res, next) => {
  // Fetch the authorization token value from the header
  const authHeader = req.headers.authorization;
  //  In case the token is not present then send error
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("Token is missing", 401);
  }

  // If the token is present then decode the value and
  // send the user id in the request
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log(error);
    throw new CustomAPIError("Authorization failed", 401);
  }
};

module.exports = authMiddleware;
