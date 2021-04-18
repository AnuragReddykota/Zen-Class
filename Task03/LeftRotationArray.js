// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic 
    var ktimes = +userInput[0];
    var dummy = userInput[1].split(" ");
    var size = dummy.length;
    var temp = [];
    for (var i = 0; i < ktimes; i++) {
        temp.push(dummy[i]);
    }
    for (i = 0; i < size - ktimes; i++) {
        dummy[i] = dummy[i + ktimes];
        console.log(dummy[i]);
    }
    var j = 0;
    for (i = size - ktimes; i < size; i++) {
        dummy[i] = temp[j];
        j++;
    }
    console.log(dummy);
    //end-here
});