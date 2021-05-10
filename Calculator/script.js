const body = document.body;
body.innerHTML = "<strong>CALCULATOR</strong>";

// creating a div
const div = document.createElement("div");
div.setAttribute("class", "container");
div.value = " ";
document.body.append(div);

// creating a input box number
const input = document.createElement("input");
input.setAttribute("class", "input");
input.value = "";
div.append(input);

// creating a button number one
const one = document.createElement("button");
one.setAttribute("class", "number one");
one.setAttribute("type", "button");
one.value = "1";
one.innerText = "1";
div.append(one);
one.addEventListener("click", displayInput);

// creating a button number two
const two = document.createElement("button");
two.setAttribute("class", "number two");
two.setAttribute("type", "button");
two.value = "2";
two.innerText = "2";
div.append(two);
two.addEventListener("click", displayInput);

// creating a button number three
const three = document.createElement("button");
three.setAttribute("class", "number three");
three.setAttribute("type", "button");
three.value = "3";
three.innerText = "3";
div.append(three);
three.addEventListener("click", displayInput);

// creating a button number four
const four = document.createElement("button");
four.setAttribute("class", "number four");
four.setAttribute("type", "button");
four.value = "4";
four.innerText = "4";
div.append(four);
four.addEventListener("click", displayInput);

// creating a button number five
const five = document.createElement("button");
five.setAttribute("class", "number five");
five.setAttribute("type", "button");
five.value = "5";
five.innerText = "5";
div.append(five);
five.addEventListener("click", displayInput);

// creating a button number six
const six = document.createElement("button");
six.setAttribute("class", "number six");
six.setAttribute("type", "button");
six.value = "6";
six.innerText = "6";
div.append(six);
six.addEventListener("click", displayInput);

// creating a button number seven
const seven = document.createElement("button");
seven.setAttribute("class", "number seven");
seven.setAttribute("type", "button");
seven.value = "7";
seven.innerText = "7";
div.append(seven);
seven.addEventListener("click", displayInput);

// creating a button number eight
const eight = document.createElement("button");
eight.setAttribute("class", "number eight");
eight.setAttribute("type", "button");
eight.value = "8";
eight.innerText = "8";
div.append(eight);
eight.addEventListener("click", displayInput);

// creating a button number nine
const nine = document.createElement("button");
nine.setAttribute("class", "number nine");
nine.setAttribute("type", "button");
nine.value = "9";
nine.innerText = "9";
div.append(nine);
nine.addEventListener("click", displayInput);

// creating a button number zero
const zero = document.createElement("button");
zero.setAttribute("class", "number zero");
zero.setAttribute("type", "button");
zero.value = "0";
zero.innerText = "0";
div.append(zero);
zero.addEventListener("click", displayInput);

// creating a button for addition
const add = document.createElement("button");
add.setAttribute("class", "number operation add");
add.setAttribute("type", "button");
add.value = "+";
add.innerText = "+";
div.append(add);
add.addEventListener("click", displayInput);

//craeting a button for subtraction
const sub = document.createElement("button");
sub.setAttribute("class", "number operation sub");
sub.setAttribute("type", "button");
sub.value = "-";
sub.innerText = "-";
div.append(sub);
sub.addEventListener("click", displayInput);

// creating a button for module
const mod = document.createElement("button");
mod.setAttribute("class", "number operation mod");
mod.setAttribute("type", "button");
mod.value = "%";
mod.innerText = "%";
div.append(mod);
mod.addEventListener("click", displayInput);

// creating a button for multiplication
const mul = document.createElement("button");
mul.setAttribute("class", "number operation mul");
mul.setAttribute("type", "button");
mul.value = "*";
mul.innerText = "*";
div.append(mul);
mul.addEventListener("click", displayInput);

// creating a button for division
const divide = document.createElement("button");
divide.setAttribute("class", "number operation divide");
divide.setAttribute("type", "button");
divide.value = "/";
divide.innerText = "/";
div.append(divide);
divide.addEventListener("click", displayInput);

// creating a button for clear
const clear = document.createElement("button");
clear.setAttribute("class", "number clear");
clear.setAttribute("type", "button");
clear.value = " ";
clear.innerText = "C";
div.append(clear);
clear.addEventListener("click", clearDisplay);

//creating period
const period = document.createElement("button");
period.setAttribute("class", "number period");
period.setAttribute("type", "button");
period.value = " ";
period.innerText = ".";
div.append(period);
period.addEventListener("click", displayInput);

// creating equal to button
const equal = document.createElement("button");
equal.setAttribute("class", "number equal");
equal.setAttribute("type", "button");
equal.value = "=";
equal.innerText = "=";
div.append(equal);
// calculating the value;
equal.addEventListener("click", function solve() {
  const evaluateValue = document.querySelector(".input").value;
  if (evaluateValue === "0/0") {
    document.querySelector(".input").value = "Cannot be divided by zero";
  } else {
    const evaluatedValue = eval(evaluateValue);
    document.querySelector(".input").value = evaluatedValue;
  }
});

// displaying the vaklue in input box
function displayInput(event) {
  const display = event.target.value;
  const displayNumber = parseInt(
    (document.querySelector(".input").value += display)
  );
  return displayNumber;
}
function clearDisplay(event) {
  const displayNumber = event.target.value;
  console.log(displayNumber);
  document.querySelector(".input").value = "";
}
