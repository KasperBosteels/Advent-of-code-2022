const fs = require("fs");
let score =0;
fs.readFile('../input.txt', 'utf8',(err,data)=>{
    const arrayOfInput = data.split("\n");
    arrayOfInput.forEach(input => {
    //console.log(input)
    score += gamelogic(input)
    });
    console.log(score);
});


const gamelogic = (input)=> {
let inputarray = input.split("");
let P1 = inputarray[0];
let P2 = inputarray[2];
switch (P1) {
    case "A":
        if(P2 == "Y")return 8
        if(P2 == "X")return 4
        if(P2 == "Z")return 3
        break;
    case "B":
        if(P2 == "Y")return 5
        if(P2 == "X")return 1
        if(P2 == "Z")return 9
    break;

    case "C":
        if(P2 == "Y")return 2
        if(P2 == "X")return 7
        if(P2 == "Z")return 6
    break;
}
}
