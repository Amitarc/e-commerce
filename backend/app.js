const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
//route import

const products = require("./routes/productRoute");
const user = require("./routes/userRoutes");
app.use("/api/v1", products);
app.use("/api/v1", user);
//middle ware for error

app.use(errorMiddleware);
module.exports = app;
