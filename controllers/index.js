const { request, response } = require('express')
const express = require('express')

// Generates a random string for an ID
const {v4} = require('uuid')

const router = express.Router()

// creating an object called users
let users = [
    {
        // First usage of a new variable syntax
        id:v4(),
        // Key and value pairs
        username: "Sidney",
        email: "sidney@sidney.com",
        password: "123abc"
    },
    {
        id:v4(),
        username: "Sarah",
        email: "Sarah@sidney.com",
        password: "123abc"
    },
    {
        id:v4(),
        username: "Sofi",
        email: "Sofi@sidney.com",
        password: "123abc"
    },
    {
        id:v4(),
        username: "Shalome",
        email: "Shalome@sidney.com",
        password: "123abc"
    },
    {
        id:v4(),
        username: "Steven",
        email: "Steven@sidney.com",
        password: "123abc"
    }

]

// Get route
// get request with callback function
// get index, (request, response)
router.get('/', (request, response)=>{
    // console.log("connected")
    // res.send("Connected")

    //send a 200 status code for ok
    //Append the JSON that takes the users object as input
    response.status(200).json(users)
})

// Post route
router.post('/', (request, response)=> {
    // responds with the body
    // console.log(request.body)

    // Take the request.body and assign the UUID tag with v4 function
    request.body.id = v4();

    // Pusing the request.body of the post request to the users object
    users.push(request.body)

    // console.log(request.body)
    
    // responds with the json file and message
    response.json({msg:"Connected"})
})

// Put route
router.put('/', (request, response)=>{
    console.log(request.body)
    // response.send({msg:"Put request connected"})

    // Taking the users array and filtering by ID
    // Check if user id matches the request.body ID in this put route
    // For each user in the users object
    // First usage of the map method of the arrays __prototype__ function 
    // Updates the users array
    // users = users.map((user)=>{
    //     if(user.id === request.body.id){

    //     }
    // })

    // Boolean logic for found users
    let foundUser = false; 

    // Using a for loop to iterate over Users object
    for(let i = 0; i < users.length; i++){
        if (users[i].id === request.body.id){

            // Found users line 2
            foundUser = true;
            users[i] = request.body
        }
    }

    // Found users line 3
    // If user is found, return response as a json of users
    // Prefixed to the json is a status response of ok 200
    if (foundUser) {
        return response.status(200).json(users)
    } else {
        // Return a 400 error if no users have been found
        return response.status(400).json({msg:"There is no user with that ID"})
    }
})

// Delete route
// Delete route cannot receive a body, can only receive a parameter
router.delete('/:id', (request, response)=>{
    
    // True or false flag logic, locally scoped within this delete route
    let foundUser = false
    
    // Select user by ID within the users array
    users = users.filter((user)=>{


        // When the id of the request params matches the user id
        // Returning false means that this entry will be unincluded in the users array
        // Returning true means this answer will be left in the users array
        if(request.params.id === user.id){
            foundUser = true;
            return false
        } else {
            return true
        }
    })

        // If the user is found, delete
        // Returns stop the execution of the route
        if(foundUser){
            return response.status(200).json({users})
        } else {
            return response.status(400).json({msg:"No user with that ID in the delete route"})
        }
})

module.exports = router