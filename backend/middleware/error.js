const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found Invalid: ${err.path} `;
    err = new ErrorHandler(message, 400);
  }

  //mongooes duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error

  if (err.name === "jsonWebTokenError") {
    const message = `Josn web Token is invalid ,try again`;
    err = new ErrorHandler(message, 400);
  }

  // jwt Expire  error

  if (err.name === "TokenExpiredError") {
    const message = `Josn web Token is Expired ,try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
};
