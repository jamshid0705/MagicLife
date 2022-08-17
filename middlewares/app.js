const express = require("express");
const app = express();
const userRoute = require("./../routes/userRoute");
const paymeRoute=require('./../routes/paymentRout')
const viewRoute=require('../routes/viewRout')
const errorController = require("./../controller/errorController");
const cookies = require("cookie-parser");
const AppError = require("../utilities/AppError");
const { urlencoded } = require("express");

app.use(express.json());
app.use(urlencoded())
app.use(cookies());

app.set("view engine", "pug");
app.set("views", `${__dirname}/../views`);

app.use("/",viewRoute)
app.use("/api/v1/users", userRoute);
app.use("/api/v1/payme",paymeRoute)

app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});
app.use(errorController);
module.exports = app;
