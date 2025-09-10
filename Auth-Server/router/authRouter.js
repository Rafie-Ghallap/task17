const express = require('express');
const router = express.Router();

let users = [{username:"user1" , password:"12345"},{username:"user2" , password:"123456"}]

router.post('/login' , (req,res) => {
    const {username , password} = req.body
    if (!username || !password) {
        return res.status(400).json({error : 'Username and password are required'})
    }
    res.json({message : 'Login successful'})
})

router.post('/register' , (req,res) => {
    const {username , password} = req.body
    if (!username || !password) {
        return res.status(400).json({error : 'Username and password are required'})
    }
    for(let user of users){
        if(user.username === username){
                return res.status(400).json({message : 'User already exists'})
        }
    }
     return res.json({message : 'Registration successful'})
})







module.exports = router