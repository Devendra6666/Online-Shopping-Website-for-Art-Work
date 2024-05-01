const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('./Databse/db')
const User = require('./models/schema')
// require('./Routes/router')
// const router = app.use('../')
app.use(require('./Routes/router'))

app.get('/',(req,res) => {
    res.send("this is the home page")
})
app.get('/about',(req,res) => {
    res.send("this is the about page")
})

app.listen(5000,() => {
    console.log("the server is listening at 5000.")
})