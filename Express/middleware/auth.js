const auth = (req, res, next) => {
    if (req.body.password === '123') {
        next();
    }
    else {
        res.send('please enter a valid password');
    }
}

module.exports = auth;