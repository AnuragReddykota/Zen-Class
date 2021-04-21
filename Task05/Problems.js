//Problem0 (Part A)
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
// console.log(cat);
// Add height and weight to Fluffy

cat.height = '3Feet';
cat.weight = '8kg';

// Fluffy name is spelled wrongly. Update it to Fluffyy

cat.name = 'Fluffyy';

// List all the activities of Fluffyy’s catFriends.

for (var item in cat.catFriends) {
    console.log(cat.catFriends[item].activities);
}
// Print the catFriends names.

for (var item in cat.catFriends) {
    console.log(cat.catFriends[item].name);
}
// Print the total weight of catFriends
var sum = 0;
for (var item in cat.catFriends) {
    sum = sum + cat.catFriends[item].weight;
}
console.log(sum)
// Print the total activities of all cats (op:6)
var count = 0;
var count1 = 0;
for (var item in cat.activities) {
    count++;
}
for (var item in cat.catFriends) {
    for (var item1 in cat.catFriends[item].activities) {
        count1++
    }
}
total = count + count1;
console.log(total);
// Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push('eat', 'sleep');
cat.catFriends[1].activities.push('drink', 'run');

// Update the fur color of bar
cat.catFriends[0].furcolor = "black"
console.log(cat)


// Problem0 (Part B)

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents:
        [
            {
                date: '3/15/2019',
                damage_points: '5000',
                atFaultForAccident: true
            },
            {
                date: '7/4/2022',
                damage_points: '2200',
                atFaultForAccident: true
            },
            {
                date: '6 / 22 / 2021',
                damage_points: '7900',
                atFaultForAccident: true
            }
        ]
}


// 1. Loop over the accidents array. Change atFaultForAccident from true to false.
for (var item in myCar.accidents) {
    myCar.accidents[item].atFaultForAccident = false;

}
// 2. Print the dated of my accidents
for (var item in myCar.accidents) {
    console.log(myCar.accidents[item].date)
}

// Problem1
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.
// Input (Object):
// var object = {name: “RajiniKanth”, age: 33, hasPets : false};
// Output:
// [“RajiniKanth”, 33, false]
var object = { name: "RajiniKanth", age: 33, hasPets: false };
var array = []
var printAllValues = function (object) {
    for (var item in object) {
        array.push(object[item])
    }
    return array;
}
console.log(printAllValues(object));

// Problem2
// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]
var object = { name: "RajiniKanth", age: 33, hasPets: false };
var array = []
var printAllValues = (object) => console.log(Object.keys(object))
printAllValues(object);

// Problem3
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]

var object = { name: "ISRO", age: 35, role: "Scientist" };
function convertListToObject(object) {
    return Object.entries(object);
}
console.log(convertListToObject(object))

// Problem4
// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.
// Input (Array):
// var array = [“GUVI”, “I”, “am”, “Geek”];
// Output:
// var object = {
// GUVI : “Geek”
// }
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var object = {};
    object[arr[0]] = arr[arr.length - 1]
    return object
}
console.log(transformFirstAndLast(arr))

// Problem5
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
// Output:
// var object = {
// make : “Ford”
// model : “Mustang”,
// year : 1964
// }


var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var newObject = {};
    newObject = Object.fromEntries(arr)
    return newObject;
}
console.log(fromListToObject(arr));

// Problem6
// "Write a function called “transformGeekData” that transforms some set of data from one format to another.
// Input (Array):
// var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
// Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]


var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (var item in arr) {
        tranformEmployeeList.push(Object.fromEntries(arr[item]));
    }
    return tranformEmployeeList
}
console.log(transformEmployeeData(arr))

// Problem7
// Write an “assertObjectsEqual” function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().
// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
// Success Case:
// Input:
// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
// Output:
// Passed
// Failure Case:
// Input:var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
// Output:
// FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}


var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 }
function assertObjectsEqual(actual, expected, testName) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        return "Passed";
    } else {
        return `Failed Expected ${expected} but got ${actual}`
    }

}
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));

// Problem8
var securityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]
function chksecurityQuestions(securityQuestions, question, ans) {
    var check = 0
    for (var item in securityQuestions) {
        if (securityQuestions[item].question == question && securityQuestions[item].expectedAnswer == ans) {
            check = 1;
            break;
        }
    }
    if (check === 1) {
        return true;
    } else {
        return false;
    }
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = "What was your first pet’s name?";
var ans = "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);

// Problem9
// Write a function to return the list of characters below 20 age
var students = [
    { name: "Siddharth Abhimanyu", age: 21 },
    { name: "Malar", age: 25 },
    { name: "Maari", age: 18 }, { name: "Bhallala Deva", age: 17 },
    { name: "Baahubali", age: 16 }, { name: "AAK chandran", age: 23 }, { name: "Gabbar Singh", age: 33 }, { name: "Mogambo", age: 53 },
    { name: "Munnabhai", age: 40 }, { name: "Sher Khan", age: 20 },
    { name: "Chulbul Pandey", age: 19 }, { name: "Anthony", age: 28 },
    { name: "Devdas", age: 56 }
];
function returnMinors(students) {
    var array = [];
    for (var item in students) {
        if (students[item].age < 20) {
            array.push(students[item].name)
        }
    }
    return array;
}
console.log(returnMinors(students));


