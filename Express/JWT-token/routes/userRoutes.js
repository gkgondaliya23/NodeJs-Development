const express = require('express');
const {registerUser, loginUser, getUser, updateUser} = require('../controller/userController');
const verifyToken = require('../middleware/auth');

const userRoutes = express.Router();

// create User
userRoutes.post('/register', registerUser);

userRoutes.post('/login', loginUser);

userRoutes.get('/me',verifyToken, getUser);

userRoutes.put('/me',verifyToken, updateUser);

userRoutes.post('/change-password',verifyToken, changeUserPassword);

module.exports = userRoutes;