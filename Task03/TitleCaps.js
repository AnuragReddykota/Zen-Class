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

    var dummy = userInput[0].split(" ");
    var emptyString = "";
    var upperCasedElements = function (data) {
        for (var i = 0; i < data.length; i++) {
            emptyString = emptyString + data[i][0].toUpperCase() + " ";
        }
        console.log(emptyString.trim(" "));
    }
    upperCasedElements(dummy);
    //end-here
});