const fs =require('fs');
const datastream = fs.readFileSync("../input.txt",'utf-8');
const data = datastream.split("");
let starters = [];
for (let i = 0; i < data.length; i++) {
    let occurance = 0
    const sequence =[data[i],data[i+1],data[i+2],data[i+3],data[i+4],data[i+5],data[i+6],data[i+7],data[i+8],data[i+9],data[i+10],data[i+11],data[i+12],data[i+13]]
    sequence.map((val)=>{
        if(sequence.indexOf(val) !== sequence.lastIndexOf(val))occurance++;
    })
    if(occurance ==0){
        console.log(sequence.join(""))
        starters.push(i+14)
    }
}
console.log(starters[0])