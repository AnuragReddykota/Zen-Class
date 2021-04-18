// Sum of all numbers in an array.

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
    var totalSum = function (data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var num = parseInt(data[i]);
            sum = sum + num;
        }
        return sum;
    }
    console.log(totalSum(dummy));
});
