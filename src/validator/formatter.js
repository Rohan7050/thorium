let test = "    functiOnUp    "

function trims(){
    console.log(test.trim())
}

function changetoLowerCase(){
    let a = test.trim().toLowerCase()
    console.log(a)
}

function changetoUpperCase(){
    let a = test.trim().toUpperCase()
    console.log(a)
}

module.exports.trim = trims
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase