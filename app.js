var express = require("express");
var createError = require("http-errors");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");

var room = require("./routes/room");
var chat = require("./routes/chat");
var app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://smsn7031:1234@cluster0-ynteb.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  err => {
    if (err) return console.error(err);
    console.log("mongoose connected!");
  }
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/rooms", express.static(path.join(__dirname, "dist")));
app.use("/api/room", room);
app.use("/api/chat", chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
