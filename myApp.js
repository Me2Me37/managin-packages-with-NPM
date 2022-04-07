var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

bGround.log("Hello World");
console.log("Hello World");

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"})
});































 module.exports = app;