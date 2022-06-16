const jwt = require("jsonwebtoken");

const authenticate = async function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "functionup-radon");

        if (!decodedToken) {
            return res.status(401).send({ status: false, msg: "token is invalid" });
        }
        else {
            req.userId = decodedToken.userId
            next()
        }
    }
    catch (error) {
        res.status(500).send({ msg: "Its Error", reason: error.message })
    }
}

const authorise = function (req, res, next) {
    try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-radon");

    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) res.status(403).send({ status: false, msg: "User logged is not allowed to modify the requested users data" })
    else next()
    }
    catch (error) {
        res.status(500).send({ msg: "Its Error", reason: error.message })
    }
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;

