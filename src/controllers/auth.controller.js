const usermodel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



async function registerController(req,resp) {
    const {username,password} = req.body;
    const isExistinguser = await usermodel.findOne({
        username
    })
    if(isExistinguser){
        return resp.status(409).json({
            message : "User already exists"
        })
    }
    const user = await usermodel.create({
        username,
        password : await bcrypt.hash(password,10)
    })
    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET)

    resp.cookie("token",token);

    resp.status(201).json({
        message : "User created succesfully",
        user
    })
}
async function loginController(req,resp) {
    const {username,password} = req.body;

    const user = await usermodel.findOne({
        username
    })

    if(!user){
      return  resp.status(400).json({
            message : "No user found with this crediential"
        })
    }
    const isPasswordvalid = bcrypt.compare(password,user.password)

    if(!isPasswordvalid){
       return resp.status(400).json({
        message : "Incorrect password"
       })
    }

   

    const token = jwt.sign({id : user._id},process.env.JWT_SECRET);
    resp.cookie("token",token);
     resp.status(201).json({
        message : "Logged in Successfully",
        user : {
            user : user.username,
            id : user._id,
            password : user.password
        }
    })
}

module.exports = {
    registerController,loginController
}