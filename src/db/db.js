const mongoose = require('mongoose');

function connecttodb(){
    mongoose.connect(process.env.MONGO_URL) .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("db connection error:", err);
    });
}

module.exports = connecttodb;