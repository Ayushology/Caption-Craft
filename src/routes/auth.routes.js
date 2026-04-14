const express = require("express");
const router = express.Router();
const usermodel = require("../models/user.models");
const jwt = require('jsonwebtoken');
const {registerController,loginController} = require('../controllers/auth.controller')

// create user
router.post("/register",registerController);
// login user
router.post("/login",loginController);

module.exports = router;
