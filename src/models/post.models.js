const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image : String,
    caption : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "usermodels"
    }
})

const postmodel = mongoose.model("post",postSchema);

module.exports = postmodel