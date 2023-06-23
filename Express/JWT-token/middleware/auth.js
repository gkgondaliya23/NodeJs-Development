const jwt = require('jsonwebtoken');

const verifyToken =  (req, res, next) => {
    const authorized = req.headers['authorization'];
    if (typeof authorized !== 'undefined') {
        const token = authorized.split(' ')[1];
        // console.log(token);
        jwt.verify(token, 'skillqode', (err, user) => {
            if (err) {
                res.json('Token invalid');
            }
            
            req.user = user;
            next();
        })
    }
    else {
        return res.json('not authorized');
    }
};

const verifyTokenAuth = (req, res, next) => {
    verifyToken(req,res,()=>{
        if(req.user_id === req.params.id ){
            next();
        }
        else {
            return res.json('unauthorized');
        }
    })
};

module.exports = {verifyTokenAuth, verifyToken};