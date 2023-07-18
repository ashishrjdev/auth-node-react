const CustomAPIError = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ status: err.statusCode, msg: err.message });
  }
  return res
    .status(500)
    .json({ status: 500, msg: "Something went wrong. Please try again later" });
};

module.exports = errorHandlerMiddleware;
