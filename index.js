const express = require('express');

// App appears to be a constructor function
const app = express();

// variable PORT stores assigned port number or 3001 by default
const PORT = process.env.PORT || 3001

// Replaces spaces in the URL, negates URL validation
// This is middleware
app.use(experss.urlencoded({extended:true}))

// Allows app to use json data
// middleware
app.use(express.json())

// listen takes two arguments, port and an optional function
app.listen(PORT, ()=>{
        console.log(`Listening at port ${PORT}`)
})