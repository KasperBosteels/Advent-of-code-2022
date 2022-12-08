
const fs = require("fs");
const data = fs.readFileSync("../input.txt", "utf-8").split("\r\n");
//remove / root already have that
data.shift()
//to store all nodes and vallues
var vallues: number[] = [];
var allnodes: n[] = []
interface n {
    name: string,
    size: number
}
interface file {
    name: string,
    size: number;
}
interface node {
    name: string,
    files?: file[],
    previousDirectory?: node;
    nextDirectory?: node[];
}

//navigates in or out of a node if no node exists to navigate into it will create one
const cd = (currentnode: node, destination: string): node => {
    if (destination === "..") {
        if (currentnode.previousDirectory) {
            return currentnode.previousDirectory
        } else {
            return currentnode
        }
    }
    let filteredResult = currentnode.nextDirectory!.filter((a) => a.name == destination)
    if (filteredResult.length === 0) {
        let mkdir: node = { name: destination, files: [], nextDirectory: [], previousDirectory: currentnode }
        currentnode.nextDirectory!.push(mkdir)
        return mkdir;
    } else {
        let index = currentnode.nextDirectory!.indexOf(filteredResult[0])
        return currentnode.nextDirectory![index];

    }
}

/**
 * 1. go trough all files of node and get total size value
 *  2. go trough all children nodes and get value with recursion
 *   2.2. for each child calculatedirsize 
 * 3. if children + current node file size less than 100_000 push to vallues
 * 4. return children + total files size
 */
const calculatedirsize = (node: node): number => {
    let sizeofdir: number = 0
    let children: number = 0
    if (node.files) {
        node.files.map((file) => {
            sizeofdir += file.size
        })
    }
    if (node.nextDirectory) {
        node.nextDirectory.map((dir) => {
            let sizeofotherdir = calculatedirsize(dir)
            children += sizeofotherdir
        })
    }
    if (children + sizeofdir <= 10000) vallues.push(children + sizeofdir)
    allnodes.push({ name: node.name, size: children + sizeofdir })
    return children + sizeofdir
}
//create empty root node
const root: node = { files: [], nextDirectory: [], name: "/", previousDirectory: undefined }

//go trough all lines to create nodes and files
const mainLoop = (data: string[]) => {
    //current location in tree
    var currentnode: node = root
    data.map((line) => {
        const linearr: string[] = line.split(" ");
        //if line is a command
        if (linearr[0] === "$") {
            //navigate
            if (linearr[1] === "cd") {
                currentnode = cd(currentnode, linearr[2])
            }
            //we ignore ls as its not usefull

            //if line is a directory
        } else if (linearr[0] === "dir") {
            //make node
            const mkdir: node = { name: linearr[1], files: [], previousDirectory: currentnode, nextDirectory: [] }

            //add child of current to nexdir
            if (currentnode.nextDirectory) {
                const index: number = currentnode.nextDirectory.indexOf(mkdir)
                if (index === -1) currentnode.nextDirectory.push(mkdir)

            } else {
                currentnode.nextDirectory = [mkdir]
            }
        } else {
            //line is file
            //create file
            //add to files
            const nano: file = { name: linearr[1], size: parseInt(linearr[0]) }
            if (currentnode.files) {
                const index: number = currentnode.files.indexOf(nano)
                if (index === -1) {

                    currentnode.files.push(nano);

                }
            } else {
                currentnode.files = [nano]
            }
        }
    })
}
mainLoop(data)
calculatedirsize(root)
console.log(vallues)
let totalVal = 0
allnodes.filter((n) => n.size <= 100000).map((o) => { console.log(o); totalVal += o.size; })
console.log(totalVal)