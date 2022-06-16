const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    try {

    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
}
catch (error) {
    res.status(500).send({ msg: "Its Error", reason: error.message })
}
};


const loginUser = async function (req, res) {
    try {

    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        return res.status(400).send({
            status: false,
            msg: "username or the password is not corerct",
        });
    let token = jwt.sign(
        {
            userId: user._id.toString(),
            batch: "radon",
            organisation: "FunctionUp",
        },
        "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
}
catch (error) {
    res.status(500).send({ msg: "Its Error", reason: error.message })
}
};


const getUserData = async function (req, res) {
    try {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
}
catch (error) {
    res.status(500).send({ msg: "Its Error", reason: error.message })
}
};



const updateUser = async function (req, res) {
    try {

    let userId = req.params.userId;
    if (userId!=req.userId) res.send({error: "not authorized"})

    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.status(400).send({ status: false, msg: "No such user exists" });

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
    res.send({ status: true, data: updatedUser });
}
catch (error) {
    res.status(500).send({ msg :"Its Error", reason: error.message })
}
};


const deleteUser = async function (req, res) {
    try {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.status(400).send({ status: false, msg: "No such user exists" });

    let deletedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{isDeleted: true}}, {new: true});
    res.send({ status: true, data: deletedUser });
}
catch (error) {
    res.status(500).send({ msg: "Its Error", reason: error.message})
}
}

const postMessage = async function (req, res) {
    try {

    let message = req.body.message
    
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}
catch (error) {
    res.status(500).send({ msg: "Its Error", reason: error.message })
}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage
