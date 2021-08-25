const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type:String,
       required: true
    },
    completedOrNot:{
        type:Boolean,
        default: false
    },
    category:{
        type:String,
       required: true
    }
}, {timestamps: true}
)

module.exports = mongoose.model("Todo", todoSchema)