const md1 = function (req, res, next){
    const data = req.headers["isfreeappuser1"]
    console.log(data)
    if (data == 12){
        next()
    }
    return res.send({Err : "this request is missing a mandatory header"})
}

const md2 = function(req, res, next){
    let appTypeHeader = req.headers['isfreeappuser']
    if(!appTypeHeader) {
        return res.send({message: 'Mandatory header missing'})
    }
    next()
}
module.exports.md1 = md1
module.exports.md2 = md2