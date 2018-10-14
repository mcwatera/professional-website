var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/views'));

var quotations = [];

app.get("/", function(req,res){
    res.render("index");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

app.get("/missionStatement", function(req,res){
   res.render("missionStatement"); 
});

app.get("/personalBio", function(req,res){
   res.render("personalBio"); 
});

app.get("/resume", function(req,res){
   res.render("resume"); 
});

app.get("/wwtbht", function(req,res){
    res.render("wwtbht");
});

app.get("/wardOne", function(req,res){
   res.render("wardOne"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("ENGL is listening for your professional website..."); 
});

