'use strict'
//Constant variables
const express = require("express")
const app = express()
const port = 8080;
const fs = require("fs")

//app.use stuff
app.use(express.static("images"))
app.use(express.urlencoded())
app.use(express.json())

app.listen(port, () => console.log("server is listening"))
