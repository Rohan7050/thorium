const axios = require("axios")

// url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

const getWether = async function(req, res){
    const {city, api_key} = req.body
    const options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    }
    let result = await axios(options)
    let temp = result.data.main.temp
    res.status(200).send({data: temp})
}

const allCity = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

const sortCityByTemp = async function(req, res){
    try{
        const {api_key} = req.params
    const tempArr = []
    for (let city of allCity){
        const options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        }
        let result = await axios(options)
        let temp = result.data.main.temp
        tempArr.push(temp)
    }
    
    const a = tempArr.map((num , i) => {
        return {city: allCity[i], temp: num}
    })
    const sort = a.sort((i, j) => i.temp - j.temp)
    res.status(200).send({data: sort})
    }catch(e){
        res.status(401).send({Err: e.message})
    }
}

module.exports.getWether = getWether
module.exports.sortCityByTemp = sortCityByTemp