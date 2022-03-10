const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(200).send({ msg: savedData });
  }catch(e){
    res.status(400).send({status: Error, msg: e.message})
  }
};

const login = async function (req, res){
  try {
    const {emailId, password} = req.body
    const user = await userModel.findOne({emailId: emailId, password: password})
    if (!user){
      return res.status(400).send({Err: "email or password is incorrect"})
    }
    const token = jwt.sign({id: user._id, name: user.firstName, myName: "rohan"}, "kurama")
    res.setHeader("x-auth-token", token)
    res.status(200).send({status: true, token: token})
  }catch(e){
    res.status(400).send({status: "Error", msg: e.message})
  }
}

const getUserData1 = async function(req, res){
  const {userId} = req.params;
  let userD = await userModel.findById(userId)
  if (!userD){
    return res.status(400).send({status: false, msg: "no such user exists"})
  }
  return res.status(200).send({status: true, data: userD})
}

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.status(200).send({ status: true, data: updatedUser });
};

const postMessage = async function (req, res) {
  let message = req.body.message
  if (!message) return res.status(400).send({Err: "Enter a msg cant leave blank"})
  let user = await userModel.findById(req.params.userId)
  if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.status(200).send({status: true, data: updatedUser})
}

const deleteUser = async function (req, res){
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(400).send("No such user exists");
  }
  // let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted: true}, {new: true});
  res.status(200).send({data: updatedUser });
}

module.exports.createUser = createUser;
module.exports.getUserData1 = getUserData1;
module.exports.updateUser = updateUser;
module.exports.postMessage = postMessage
module.exports.login = login
module.exports.deleteUser = deleteUser;
