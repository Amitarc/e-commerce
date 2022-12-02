const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorhandler");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Register a user

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is the sample Id",
      url: "profilepicUrl",
    },
  });

  res.status(201).json({ success: true, user });
});
