const jwt = require("jsonwebtoken");

const authenticate = function (req, req, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) res.send({ status: false, Error: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, "funcionUp-radon")
    if (!decodedToken) res.send({ status: false, Error: "Token is not valid" })

    next()
}


const authorise = function (req, res, next) {
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) res.send({ status: false, msg: "User logged is not allowed to modify the requested users data" })

    next()
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;