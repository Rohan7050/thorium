const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/project_1?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch (err => console.log(err))

app.use("/", route)

app.listen(3000, () => {
    console.log("LISTINING ON PORT 3000")
})