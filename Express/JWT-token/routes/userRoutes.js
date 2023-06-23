const express = require('express');
const {registerUser, loginUser, getUser, updateUser} = require('../controller/userController');
const {verifyToken, verifyTokenAuth} = require('../middleware/auth');

const userRoutes = express.Router();

// create User
userRoutes.post('/register', registerUser);

userRoutes.post('/login', loginUser);

userRoutes.get('/:id',verifyToken, getUser);

userRoutes.put('/:id',verifyToken, updateUser);

module.exports = userRoutes;