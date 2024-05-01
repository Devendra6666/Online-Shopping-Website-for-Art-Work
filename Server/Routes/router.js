const express = require("express")
const router = express.Router()
router.use(express.json())
// const User = require('../models/schema')
const User = require('../models/schema')

router.get("/",(req,res) => {
    res.send("this is router home page")
})
// this is the register route for the user

router.post('/register',async(req,res) => {
   try {
    const {name,email,profession,phone,password} = req.body;
    
    if(!name || !email ||!profession || !phone || !password){
        return res.status(401).json({err : "Fill all the fields"})
    }
    const userExist = await User.findOne({email:email})
    if(userExist){
        return res.status(401).json({message : "email already exist"})
    }
    const user = new User({name,email,profession,phone,password})
    userRegister = await user.save()
    return res.status(201).json({message : "user registered successfully"})
    console.log(userRegister)

   } catch (error) {
    console.log(error)
   }
})

// this is for the login request for the user

router.post('/login',async(req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(401).json({err : "plz fill all the fields"})
        } 
        const userexist = await User.findOne({email:email})
        // console.log(userexist)
        if(userexist){
            if(password === userexist.password){
                return res.status(201).json({message : "user login successsful"})
             }else{
                return res.status(401).json({err : "invalid credentials"})
             }
        }else{
            return res.status(401).json({err:"invalid credentials"})
        }

    } catch (error) {
        console.log(error)
    }
})
module.exports = router;