const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = (req, res) => {
    const { username, email, mobile, password} = req.body;
    // validate fields
    if(!username || !email || !mobile|| !password){
        return res.status(400).json("This field can not be empty")
    }
    // check user
    User.findOne({email:email}).then((user) =>{
        if(user){
            return res.status(400).json("this emailId is already registered with us")
        }
    })
    //generate hash password
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, (err, hash) => {
            if(err) throw err;
            //save the user
            const newUser = new User({username: username, email: email, mobile: mobile, password:hash})
            
            newUser
                .save()
                .then((user) => {
                    return res.status(200).json(user)
                })
                .catch((err) => {
                    return res.status(400).json(err)
                })
        })
    })

}

//login
module.exports.login = (req, res) => {
    const {email, password} = req.body;
    // validate fields
    if( !email || !password){
        return res.this.status(400).json("This fields are required")
    }

    //validate User
    User.findOne({email: email}).then((user) => {
        if(!user){
            return res.status(400).json("this email is not registered with us")
        }
        //password valdation
        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch){
                return res.status(400).json("password is incorrect")
            }
        })
        //passport sign
        jwt.sign(
            {_id: user._id},
            process.env.JWT_KEY,
            {expiresIn:3600},
            (err, token) =>{
                if(err) throw err;
                return res.status(400).json({
                    token: token, user:{name:user.username, email: user.email}
                })
            }

        )

    })
}