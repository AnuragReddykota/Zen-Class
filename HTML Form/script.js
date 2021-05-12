function append() {
  let btn = document.querySelector(".btn");
  let tble = document.querySelector(".table");
  let fName = document.querySelector("#firstname").value;
  let lName = document.querySelector("#lastname").value;
  let addr = document.querySelector("#address").value;
  let pinCode = document.querySelector("#pin").value;
  let gender = document.querySelector("#input").value;
  let preferneceOfFood = document.querySelectorAll("#food");

  // for getting all the food preferences
  var foodstr = "";
  var count = 0;
  for (var i = 0; i < 5; i++) {
    if (preferneceOfFood[i].checked == true) {
      foodstr = foodstr + preferneceOfFood[i].value + " ";
      count++;
    }
  }

  let cName = document.querySelector("#country").value;
  let sName = document.querySelector("#state").value;

  // checked if the minimum number of choices are entrerd on not
  if (count >= 2) {
    // creating a new row and populating with columns
    let newrow = tble.insertRow(-1);
    let column1 = newrow.insertCell(0);
    let column2 = newrow.insertCell(1);
    let column3 = newrow.insertCell(2);
    let column4 = newrow.insertCell(3);
    let column5 = newrow.insertCell(4);
    let column6 = newrow.insertCell(5);
    let column7 = newrow.insertCell(6);
    let column8 = newrow.insertCell(7);

    // appending data to the columns
    column1.append(fName);
    column2.append(lName);
    column3.append(addr);
    column4.append(pinCode);
    column5.append(gender);
    column6.append(foodstr);
    column7.append(cName);
    column8.append(sName);
  } else {
    alert("Enter a minimum of two food choices");
  }

  // after sunmitting the details the form is cleared
  document.getElementById("form").reset();
}
