//import user model

const User = require("../models/userModel");

//import jsonwebtoken

jwt = require('jsonwebtoken');

//import bcryptjs - hashing function

bcrypt = require ('bcryptjs');

//DEFINITION OF CONTROLLER FUNCTIONS

// get all users

exports.getAllUsers = (req, res) => {
    let allUsers = User.find({}, (err, users) =>{
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).json(users);
        }
    })
}

//user register function

exports.signUp = (req, res) => {
    let newUser = new User(req.body);
    newUser.hash_password =    bcrypt.hashSync(req.body.password,  10);
    newUser.save((err, user) => {
        if(err){
            res.status(500).send({message:err});
        }
        user.hash_password=undefined;
        res.status(201).json(user);
    });
};


//user sign-in function


exports.logIn=(req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;
        if(!user){
            res.status(401).json({message: "Aunthetication failed. couldn't find user."});
        }else if (user){
            if(!user.comparePassword(req.body.password)){
                res.status(401).json({message:'Aunthetication failed. Incorrect Password.'});
            }else{
                res.json({token: jwt.sign({email:user.email, fullName:user.fullName, _id: user._id}, 'RESTfulAPIs')
            });
            }
        }
    });
};

//user registration function

exports.loginRequired = (req, res, next) =>{
    if(req.user){
        //res.json({message: 'Authorized user, Action Successful'});
        next()
    }else{
        res.status(401).json({message:'Unauthorized user!!'});
    }
};