const fs =require('fs');
const datastream = fs.readFileSync("../input.txt",'utf-8');
const data = datastream.split("");
let starters = [];
for (let i = 0; i < data.length; i++) {
    let occurance = 0
    const sequence =[data[i],data[i+1],data[i+2],data[i+3]]
    sequence.map((val)=>{
        if(sequence.indexOf(val) !== sequence.lastIndexOf(val)){
            occurance++;
        }
    })
    if(occurance ==0){
        starters.push(i+4)
    }
}
console.log(starters[0])
