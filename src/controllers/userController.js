const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const login = async function (req, res){
  const {emailId, password} = req.body
  const user = await userModel.findOne({emailId: emailId, password: password})
  if (!user){
    return res.send({Err: "email or password is incorrect"})
  }
  const token = jwt.sign({id: user._id, name: user.firstName, myName: "rohan"}, "kurama")
  res.setHeader("x-auth-token", token)
  res.send({status: true, token: token})
}

const getUserData1 = async function(req, res){
  const {userId} = req.params;
  let userD = await userModel.findById(userId)
  if (!userD){
    return res.send({status: false, msg: "no such user exists"})
  }
  return res.send({status: true, data: userD})
}

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function (req, res){
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }
  // let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted: true}, {new: true});
  res.send({data: updatedUser });
}

module.exports.createUser = createUser;
module.exports.getUserData1 = getUserData1;
module.exports.updateUser = updateUser;
module.exports.login = login
module.exports.deleteUser = deleteUser;
