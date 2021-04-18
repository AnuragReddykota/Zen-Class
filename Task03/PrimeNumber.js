// 1.Return all the prime numbers in an array

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let dummy = userInput[0].split(" ");
  //   let array = [];
  let prime = function (arr) {
    for (i = 0; i < arr.length; i++) {
      let count = 0;
      //   let arr_elements = +arr[i];
      for (j = 1; j <= arr[i]; j++) {
        //   console.log(arr[i]);
        //   console.log(j);
        if (arr[i] % j === 0) {
          count++;
          //   console.log(count);
        }
      }
      if (count == 2) {
        console.log(arr[i], "Prime");
      }
    }
  };
  prime(dummy);
  //end-here
});
