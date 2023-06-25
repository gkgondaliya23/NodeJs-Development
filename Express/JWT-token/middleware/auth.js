const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js');
const verifyToken = async (req, res, next) => {
    const authorized = req.headers['authorization'];
    if (typeof authorized !== 'undefined') {
        const token = authorized.split(' ')[1];
        // console.log(token);
        const {userID} = jwt.verify(token, 'skillqode')
        req.user = await User.findById(userID).select('-password');
        console.log(req.user);
        next();
    }
    else {
        return res.json('not authorized');
    }
};

module.exports = verifyToken;