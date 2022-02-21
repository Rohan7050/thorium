const lodash = require("lodash")
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 6, 1, 7]
const arr3 = [4, 6, 1, 2]
const arr4 = [6, 9, 1, 4]
const arr5 = [0, 5, 2, 5]

function arrSpliter(){
    console.log(lodash.chunk(month, 3))
}

function giveTail(){
    console.log(lodash.tail(odds))
}

function arrUnion(){
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5))
}

module.exports.arrSpliter = arrSpliter
module.exports.giveTail = giveTail
module.exports.arrUnion = arrUnion