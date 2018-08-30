var express = require("express");

var app = express(); var PORT = 3000;

app.get("/", function(req, res) { res.send("I love Git!"); });

app.listen(PORT, function() { console.log("App listening on PORT " + PORT); });