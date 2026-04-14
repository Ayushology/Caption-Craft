const postmodel = require('../models/post.models')
const generateCaption = require('../services/ai.service')
async function postController (req,resp){
   const file = req.file;

    if (!file) {
        return resp.status(400).json({
            message: "No file uploaded"
        });
    }
    const caption = await generateCaption(file);
    
    resp.status(201).json({
        caption
    })
    
}
module.exports = {postController};