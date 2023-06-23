const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res)=>{
    const {firstname,lastname,email,password} = req.body;

    const isExist = await User.findOne({email: email});

    if(isExist){
        res.status(400).json({message:'User already exists'});
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            firstname,
            lastname,
            email,
            password: hashPassword,
        })
        newUser.save();
        res.status(201).json(newUser);
    }
};

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email: email});

    if(!user){
        res.status(400).json({message:'User not found'});
    }
    
    const isMatched = await bcrypt.compare(password, user.password);

    if(!isMatched){
        res.status(400).json({message:'password mismatch'});
    }

    const token = jwt.sign({user_id: user._id}, 'skillqode')

    res.json({token});
};

exports.getUser = async(req, res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({user});
}

exports.updateUser = async(req, res)=>{
    const id = req.params.id;
    const user = await User.findById(id);

    if(!user)
        return res.status(400).json({message: 'User not found'})
    
    const updateuser = await User.findByIdAndUpdate(id,req.body,{new:true});
    updateuser.save();
    res.status(200).json(updateuser);
}