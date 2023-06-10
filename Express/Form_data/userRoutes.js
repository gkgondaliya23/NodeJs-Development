const User = require('./model.js');
const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/', async(req, res)=>{
    const {username, email, password} = req.body;

    const existUser = await User.findOne({email: email});
    if(existUser)
        res.status(200).json({msg: 'User already exists'});

    const newUser = new User({username, email, password});
    newUser.save();
    res.status(200).json(newUser);
    res.redirect('/loginForm.html');
})

module.exports = userRoutes;