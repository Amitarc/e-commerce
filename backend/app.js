const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
//route import

const products = require("./routes/productRoute");
app.use("/api/v1", products);
//middle ware for error

app.use(errorMiddleware);
module.exports = app;
