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
    let max = elfCallorydb.sort((a,b)=>a < b ? 1 : -1)[0]
    console.log(max)
})
