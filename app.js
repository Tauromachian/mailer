var express = require("express");
var logger = require("morgan");

var indexRouter = require("./routes/index");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
