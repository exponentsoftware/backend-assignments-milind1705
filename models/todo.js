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
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
       required: true
    }
}, {timestamps: true}
)

module.exports = mongoose.model("Todo", todoSchema)