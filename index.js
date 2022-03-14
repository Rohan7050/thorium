const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://rohan7599:MipvNOjb97usB2oZ@cluster0.lviwx.mongodb.net/project_1_(14March)?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch (err => console.log(err))

app.use("/", route)

app.listen(3000, () => {
    console.log("LISTINING ON PORT 3000")
})