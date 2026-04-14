const express = require('express')
const authMiddlewares = require('../middlewares/auth.middleware')
const router = express.Router()
const {postController} = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()});


router.post('/',
    authMiddlewares,
    upload.single("image"),
    postController)

module.exports = router