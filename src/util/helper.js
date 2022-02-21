let today = new Date();
let dd = String(today.getDate())
let mm = String(today.getMonth())
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonth = month[mm]

function printDate(){
    console.log(`Date: ${dd}`)
}

function printMonth(){
    console.log(`Month: ${currentMonth}`)
}

function getBatchInfo(){
    console.log("Thorium, W4D1, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo

