'use strict'
//Constant variables
const express = require("express")
const app = express()
const port = 8080;
const fs = require("fs")

//app.use stuff
app.use(express.static(__dirname));
app.use(express.static("images"))
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(express.json())

//Post and get server functions
app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(port, () => console.log("server is listening"))
