const tokenObj = require("../Token/token");

const middleware = (req, res, next) => {
    const reqHeaders = req.headers;
    if (reqHeaders.token == tokenObj.token) {
        next();
    }
    else {
        res.json({ msg: " Unauthorized user... " });
    }
}

module.exports = middleware;