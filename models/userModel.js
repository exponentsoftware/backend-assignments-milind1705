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
            message: '{value} is not a valid email',
            isAsync: false
        }

    },
    mobile:{
        type:Number,
        required: true,
        unique:true,
        min: 10,
        max: 10
    }
}, {timestamps: true}

)

module.exports = mongoose.model("User", userSchema)