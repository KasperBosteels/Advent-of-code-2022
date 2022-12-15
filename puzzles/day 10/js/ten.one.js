const fs = require("fs")
const rawdata = fs.readFileSync("../input.txt","utf-8").split("\r\n")
var cycles = 1
var signalStrength = 0
var register =1
var checVal = new Set();
rawdata.map((line) =>{
    const c = line.split(" ")
    switch(c[0]){
        case "noop":
            cycles++
            break;
        case "addx":
            cycles++
            signalStrength =  measureSignal(cycles,register)
            check(cycles,signalStrength)
            register+=parseInt(c[1])
            console.log("cycle: ",cycles," x: ",register," line: ",line)
            cycles++
            break;
    }
    signalStrength =  measureSignal(cycles,register)
    check(cycles,signalStrength)
})
var totalSum = 0;
const sumo = ()=>{
    checVal.forEach((v)=>totalSum+=v)
}
console.log(checVal)
sumo();
console.log(totalSum)

function measureSignal (c,r){
    return c * r; 
}
function check(c,s){
    if(c==20){
        console.log(s)
        checVal.add(s)
    }else if(c==60){
        console.log(c," * ",register)
        checVal.add(s)

    }else if(c==100){
        console.log(s)
        checVal.add(s)

    }else if(c==140){
        console.log(s)
        checVal.add(s)

    }else if(c==180){
        console.log(s)
        checVal.add(s)

    }else if(c==220){
        console.log(s)
        checVal.add(s)

    }
}
