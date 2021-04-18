// Print odd numbers in an array

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
    let dummy = userInput[0].split(" ");
    let prime = function (arr) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                console.log(arr[i], "Odd");
            }
        }
    };
    prime(dummy);
    //end-here
});
