const jwt = require("jsonwebtoken");

const md1 = function(req, res, next){
    let token = req.headers["x-Auth-token"]
  if(!token){
    token = req.headers["x-auth-token"];
  }
  if(!token){
    return res.send({Err: "token must be present in header"})
  }
  const decodedToken = jwt.verify(token, "kurama")
  if(!decodedToken){
    return res.send({Err: "invalid token"})
  }
  const {userId} = req.params;
  if(userId == decodedToken.id){
    next()
  }else{
    res.send({Err: "invalid token"})
  }
}

module.exports.md1 = md1