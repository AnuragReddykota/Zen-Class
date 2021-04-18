// Remove duplicates from an array 

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
    var emptyArray = [];
    var withoutDuplicated = [];
    var array = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var elements = +arr[i];
            emptyArray.push(elements);
        }
        for (i = 0, j = 0; i < emptyArray.length; i++) {
            var key = emptyArray[i];
            var exist = 0;
            for (var k = 0; k < i; k++) {
                if (withoutDuplicated[k] == key) {
                    exist = 1;
                }
            }
            if (!exist) {
                withoutDuplicated.push(emptyArray[i]);
                j++;
            }
        }
        console.log(withoutDuplicated);
    }

    array(dummy);
    //end-here
});