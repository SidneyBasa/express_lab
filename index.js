const express = require('express');

// Connects to the controllers folder
const router = require('./controllers')

// App appears to be a constructor function
const app = express();

// variable PORT stores assigned port number or 3001 by default
const PORT = process.env.PORT || 3001

// Replaces spaces in the URL, negates URL validation
// This is middleware
app.use(express.urlencoded({extended:true}))

// Allows app to use json data
// middleware
app.use(express.json())

// Connects to the second index.js file
app.use('/users', router)

// listen takes two arguments, port and an optional function
app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}`)
})