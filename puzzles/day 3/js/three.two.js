const fs = require("fs");
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var totalValue = 0
fs.readFile('../input.txt', 'utf8',(err,data)=>{
    const arrayOfInput = data.split("\n");
    const alphabetValueDict = createDictionary(alphabet)
    for (let i = 0; i < arrayOfInput.length; i++) {
        if(i % 3 == 0){
            let valueofGroup = CheckGroup(arrayOfInput[i].split(""),arrayOfInput[i+1].split(""),arrayOfInput[i+2].split(""),alphabetValueDict)
            totalValue +=valueofGroup
        }
    }
    console.log(totalValue)
});
const createDictionary = ()=>{
    let dict = {};
    const alphabetarr = alphabet.split("")
    for (let i = 0; i < alphabetarr.length; i++) {
        dict[alphabetarr[i]] = i+1
    }
    return dict;
}

const CheckGroup = (one,two,three,alphadict) =>{
two =two.filter((a)=> one.includes(a) && three.includes(a))
three = three.filter((a)=> one.includes(a) && two.includes(a))
one = one.filter((a)=>two.includes(a)&& three.includes(a))
return alphadict[one[0]]
}