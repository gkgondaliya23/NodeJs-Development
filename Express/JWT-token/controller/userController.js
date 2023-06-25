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

exports.getUser = async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.json({ user });
}

exports.changeUserPassword = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const { password } = req.body;
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        } else {
            const salt = await bcrypt.genSalt(10);
            const newHashPassword = await bcrypt.hash(password, salt);

            const newPassword = await User.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } }, { new: true });
            newPassword.save();
            res.status(200).json({ message: 'Password updated' });
        }
    } catch (error) {
        console.log(error);
        res.json({ message: 'failed to change password' });
    }
}

exports.updateUser = async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user)
        return res.status(400).json({ message: 'User not found' })

    const updateuser = await User.findByIdAndUpdate(user._id, req.body, { new: true });
    updateuser.save();
    res.status(200).json(updateuser);
}