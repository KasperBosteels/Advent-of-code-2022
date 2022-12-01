const fs = require("fs");
var elfCallorydb = []

fs.readFile('./input.txt', 'utf8',(err,data)=>{
    if(err)return console.log(err);
    const arrayOfInput = data.split("\n")
    let totalPerElf = 0;
    arrayOfInput.forEach(calloryItem => {
    if(calloryItem > 0){
        totalPerElf+=parseInt(calloryItem)
    }else {
    elfCallorydb.push(totalPerElf)
    totalPerElf=0;
    }
    });
    let elfCallsInDescendingOrder = elfCallorydb.sort((a,b)=>a < b ? 1 : -1)
    let top3 = elfCallsInDescendingOrder.shift() + elfCallsInDescendingOrder.shift() + elfCallsInDescendingOrder.shift()
    console.log(top3)
})
