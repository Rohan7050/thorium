const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next){
  let token = req.headers["x-Auth-token"]
  if(!token){
    token = req.headers["x-auth-token"];
  }
  if(!token){
    return res.status(400).send({Err: "token must be present in header"})
  }
  try{
    const decodedToken = jwt.verify(token, "kurama")
  if(!decodedToken){
    return res.status(400).send({Err: "invalid token"})
  }
  next()
  }catch(e){
    return res.status(400).send({status: "ERROR", msg: e.message})
  }
  
}

const authorise = function(req, res, next){
  let token = req.headers["x-Auth-token"]
  if(!token){
    token = req.headers["x-auth-token"];
  }
  const decodedToken = jwt.verify(token, "kurama")
  const {userId} = req.params;
  if(userId == decodedToken.id){
    next()
  }else{
    res.status(400).send({Err: "invalid token for this user"})
  }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise