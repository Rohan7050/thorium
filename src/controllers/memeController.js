const axios = require("axios")

let memeCon = async function (req, res){
    try{
        const {mId, t0, t1} = req.body 
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${mId}&text0=${t0}&text1=${t1}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.status(200).send({data:result.data})
    }catch(e){
        res.status(401).send({Err: e.message})
    }
}

module.exports.memeCon = memeCon
