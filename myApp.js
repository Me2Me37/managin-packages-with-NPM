const { config } = require('dotenv');
var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require("dotenv").config()
var bodyParser = require("body-parser");


app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
});

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

bGround.log("Hello World");
console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
  });

// app.get("/json", function(req, res) {
//     res.json({"message": "Hello json"});
// });

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
            { "message": "HELLO JSON"}
        )
    } else {
        res.json(
            { "message": "Hello json"}
        )
    }
});

function getTheCurrentTimeString() {
    return new Date().toString();
}

app.get("/now", function(req, res, next) {
    req.time = getTheCurrentTimeString();
    next();
}, function(req, res) {
    res.json({ time: req.time });
})

app.get("/:word/echo", function(req, res) {
    res.json({ echo: req.params.word });
});

app.get("/name", function(req, res) {
    res.json({ name: req.query.first + " " + req.query.last});
});




























 module.exports = app;