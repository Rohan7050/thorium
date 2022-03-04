const express = require('express');
const moment = require("moment")
const requestIp = require("request-ip")
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();
// const dt = moment();

app.use(requestIp.mw({ attributeName : 'customIp' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
    let date = moment().format()
    // let ip = req.customIp;
    // let routes = req.route.path
    console.log(date, req.ip, req.originalUrl)
    next()
})

mongoose.connect("mongodb+srv://rohan7599:MipvNOjb97usB2oZ@cluster0.lviwx.mongodb.net/mongoDBsession3?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
