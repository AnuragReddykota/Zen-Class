// Return median of two sorted arrays of same size 

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
    var dummy2 = userInput[1].split(" ");
    var array = [];
    var array2 = [];
    for (var i = 0; i < dummy.length; i++) {
        var number = parseInt(dummy[i]);
        array.push(number);
    }
    for (i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    for (i = 0; i < dummy2.length; i++) {
        var number2 = parseInt(dummy2[i]);
        array2.push(number2);
    }
    for (i = 0; i < array2.length; i++) {
        for (j = i + 1; j < array2.length; j++) {
            if (array2[i] > array2[j]) {
                temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
            }
        }
    }
    var concatenatedArray = array.concat(array2);
    console.log(concatenatedArray)
    var lengthOfConcatenatedArray = concatenatedArray.length;
    console.log(lengthOfConcatenatedArray)
    if (lengthOfConcatenatedArray % 2 === 0) {
        var median = concatenatedArray[lengthOfConcatenatedArray / 2 - 1];
        console.log(median);
        var median1 = concatenatedArray[lengthOfConcatenatedArray / 2];
        console.log(median1)
        console.log((median + median1) / 2);
    } else {

        var lengthOddArray = Math.ceil(lengthOfConcatenatedArray / 2);
        var median2 = concatenatedArray[lengthOddArray - 1];
        console.log(median2);
    }
    //end-here
});