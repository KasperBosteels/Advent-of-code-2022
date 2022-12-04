const fs = require("fs");
var score = 0;
fs.readFile('../input.txt', 'utf8',(err,data)=>{
    const arrayOfInput = data.split("\n");
    var zone = []
    arrayOfInput.map((pair)=> {
        elf = pair.split(",");
        for (let i = 0; i < elf.length; i++) {
            let zones = elf[i].split("-")
            zone[i] = { 
                start:parseInt(zones[0]),
                end:parseInt(zones[1])
            }
            
        }
        if(logic(zone)){
            console.log(zone)
            score++;}
    })
    console.log(score)
});
const logic = (zone)=>{
    //catch first large second small
    if(zone[0].start <= zone[1].start && zone[0].end >= zone[1].end){
        return true
    //catch first small second large
    }else if(zone[0].start >= zone[1].start && zone[0].end <= zone[1].end){
        return true
    }else if (zone[0].start <= zone[1].start && zone[0].end >= zone[1].start){
        return true
    } else if(zone[0].start <= zone[1].end && zone[0].end >= zone[1].end){
        return true
    }
    return false
}