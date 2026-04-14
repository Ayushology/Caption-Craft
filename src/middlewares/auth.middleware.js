const jwt = require('jsonwebtoken')
const usermodel = require('../models/user.models')
async function authMiddlewares(req,resp,next){
    const token = req.cookies.token;

    if(!token){
        return resp.status(401).json({
            message : "Unauthorised token,Invalid user"
        })
    }
    try{
       const decoded = jwt.verify(token,process.env.JWT_SECRET);
       const user = await usermodel.findOne({
        _id : decoded.id
       })
       next()
       req.user = user; 

    }catch(err){
        return resp.status(401).json({
            message : "Invalid Token"
        })
    }
}

module.exports = authMiddlewares