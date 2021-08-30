const mongoose = require('mongoose');
const Enum = require('enum');

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
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
       required: true
    }
        // category:{
        //     type: String,
        //     Enum:["work","task", "hobby"],
        //     default: "task"
        // }

}, {timestamps: true}
)

module.exports = mongoose.model("Todo", todoSchema)