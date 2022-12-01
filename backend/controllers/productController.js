const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const Errorhandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create product--Admin

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  return res
    .sendStatus(200)
    .json({ message: "product created successfully", product });
});

// get all product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

//get single product

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({ success: true, product });
});
//update product--Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//delete product--Admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  await product.remove();

  res
    .status(200)
    .json({ success: true, message: "product deleted successfully" });
});
