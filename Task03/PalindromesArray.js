// Return all the palindromes in an array 

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
    var checkPalindrome = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var remainder = 0;
            var reverse = 0;
            var number = +arr[i];
            var temp = number;
            while (number > 0) {
                remainder = number % 10;
                reverse = (reverse * 10) + remainder;
                number = parseInt(number / 10);
            }
            if (reverse === temp) {
                console.log(reverse)
            }
        }
    }
    checkPalindrome(dummy);


    //end-here
});