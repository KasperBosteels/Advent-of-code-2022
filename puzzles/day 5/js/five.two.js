const fs = require('fs');
let rawdata = fs.readFileSync("../input.txt","utf-8").split("\r\n");
let data = []
for (let i = 0; i < 9 ;i++) {
 data.push(rawdata[i])
}
let commandata=[]
for (let i = 10; i < 512; i++) {
commandata.push(rawdata[i])  
}
const inputStacks = data
inputStacks.pop();
const stacks = [];

inputStacks.forEach((line)=>{
    for (let i = 0; i < line.length; i+=3 +1) {
        let start = i;
        let end = start + 3;
        let crate = line.substring(start,end);
        let index = i / (3+1);
        if(!stacks[index])stacks[index] = [];
        if(crate.trim())stacks[index].push(crate.substring(1,2));
    }
});
stacks.map((stack)=>{
    stack.reverse();
});
let commands = commandata.map(command=>{
    const splitcommand = command.split(" ");
    const count =parseInt(splitcommand[1]);
    const origin = parseInt(splitcommand[3])-1;
    const target = parseInt(splitcommand[5])-1;
    return {count,origin,target};
});

const stack2 = ()=>{
    let pain = JSON.parse(JSON.stringify(stacks))
    for (let {count,origin,target} of commands){
        let cratesPerStack = pain[origin].splice(-1*count,count)
        pain[target].push(...cratesPerStack);
    }
console.log(pain.map((suffering)=>suffering[suffering.length-1]).join(""));
}
stack2();