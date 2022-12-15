const fs = require("fs")
const rawdata = fs.readFileSync("../input.txt","utf-8").split("\r\n")
var cycles = 1
var drawing = []
var register =1
rawdata.map((line) =>{
    const c = line.split(" ")
    //console.log("cycle: ",cycles," x: ",register," line: ",line)
    switch(c[0]){
        case "noop":
            newCycle();
            break;
        case "addx":
            newCycle();
            register+=parseInt(c[1])

            newCycle();
            break;
    }
})
function newCycle(){
    draw();
    if(cycles % 40 == 0 && cycles != 0 ){
        drawing.push("\n")
    cycles = 1
}else{
    cycles++
}
}
function draw(){   
const difference = Math.abs(cycles - register)
console.log(`x: ${register} Cycle: ${cycles} differece:${difference}`)
if(difference<=1){
    drawing.push("#")
}else{
    drawing.push(" ")
}
console.log(drawing.join(""))
}