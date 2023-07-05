console.log("Abdul Rehman here")
const express = require('express')
const app = express() 

app.use('/assets',express.static("assets"))
app.use('/images',express.static('images'))

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    console.log("index")
    // res.status(500).send("Hi")
    res.render('index.ejs', {text:"world"}) 
})

app.get("/abdulrehman", (req,res) => {
    console.log("abdulrehman")
    // res.status(500).send("Hi")
    res.render('index.ejs', {text:"world"}) 
})



app.get("/contact", (req,res) => {
    console.log("contact")
    res.render('contact', {text:"world"}) 
})


app.listen(5000)


