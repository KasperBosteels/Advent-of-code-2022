const fs = require("fs");
let unorderedRucksack = []
let resultPerRucksack;
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var totalValue = 0
fs.readFile('../input.txt', 'utf8',(err,data)=>{
    const arrayOfInput = data.split("\n");
    const alphabetValueDict = createDictionary(alphabet)
    arrayOfInput.map((rucksack)=> {
        unorderedRucksack = splitArrayInTwo(rucksack)
        resultPerRucksack = CheckDoubleTypes(unorderedRucksack);
       totalValue += getValuesPerItem(resultPerRucksack,alphabetValueDict)

    })
    console.log(totalValue)
});

const splitArrayInTwo =(input)=>{
    const length = input.length;
    return [input.substring(0,length/2),input.substring(length/2)];
}

const CheckDoubleTypes = (input)=>{
    const result = []
    const sack2 = input[1].split("")
    input[0].split("").forEach(itemsack1 => {
        if(sack2.includes(itemsack1)){
            result.push(itemsack1)
        }
    });
    return result;
}

const getValuesPerItem = (input,alphabetValueDict)=>{
    let value;
    input.map((character)=>{
        value = alphabetValueDict[character]
    })
    return value;
}

const createDictionary = ()=>{
    let dict = {};
    const alphabetarr = alphabet.split("")
    for (let i = 0; i < alphabetarr.length; i++) {
        dict[alphabetarr[i]] = i+1
    }
    return dict;
}