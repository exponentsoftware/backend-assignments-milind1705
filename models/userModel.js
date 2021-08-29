const mongoose = require('mongoose');
const validator = require('validator')


const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        isEmail:true,
        required : true,
        unique:true,
        validate: {
            validator: validator.isEmail,
            isAsync: false
        }
    },
    mobile:{
        type:String,
        required: true,
        unique:true,
        minlength: 10,
        maxlength:10
    },
    role: {
        type: String,
        required:true,
        default: "appUser"
    },
    password: {
        type:String,
        required:true
    },
    todo:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }]
}, {timestamps: true}

)

module.exports = mongoose.model("User", userSchema)