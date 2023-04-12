//require router from express
const router=require("express").Router()
const User=require("../models/User")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const isAuth = require("../middlewares/isAuth");
const { registerRules, LoginRules } = require("../middlewares/validator");
const { validator } = require("../middlewares/validator");


router.post("/register",registerRules(),validator,async(req,res) =>{
    const{name,lastName,email,password}=req.body
    try{

//check for existing user
let user=await User.findOne({email})

if(user){
    return res.send({msg:"user already exists"})
}
//create new user
user=new User({name,lastName,email,password})
// create salt and hash(bcrypt)
const salt=10;
const hashedPassword=await bcrypt.hash(password,salt)
// replace user password with hashed password
user.password=hashedPassword
//save the user
await user.save()


//sign the user
const payload = {
    id: user._id
}

const token=await jwt.sign(payload,process.env.secretKey,{
    expiresIn: '7 days'
})
res.send({msg:"User registred with success",user,token})
    }
    catch(error){
        res.send({msg:"server error"})
        
    }
})
// @ post api/auth/login
// @description login user
// @access 
router.post("/login", LoginRules(),validator,async(req,res) =>{
    const{email,password}=req.body
    try{
    let user= await User.findOne({email})
    if (!user){
        return res.send({msg:'Bad credentials ! email'})
    }
     
    //check password
    const isMatch=await bcrypt.compare(password,user.password)
     if(! isMatch) {
        return res.send({msg: 'Bad credentials!password'})
    }

    //generate token
    const payload = {
        id: user._id
    }

const token=await jwt.sign(payload,process.env.secretKey,{
    expiresIn: '7 days'
})
    res.send({msg:"logged with success ",user, token})
    }
    catch(error){
        console.log(error)

    }
})
//@ route GET api/auth/user
//@desc get authentified user
//access private
router.get("/user",isAuth,(req,res) =>{
    res.send({user:req.user})
})


module.exports=router
