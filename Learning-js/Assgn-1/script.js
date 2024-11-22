const myVar = "Javascript is amazing";
console.log(myVar)


const myNewVar = "Javascript is amazing";
console.log( "NEXTGEN's " + myNewVar)

// string datatype
const myName = "Adeleke Muinat Olawumi"; 
console.log(myName)

// number datatype
const myAge = 39;
console.log(myAge)
 
// boolean datatype
const iLikeJavascript = true;
console.log(iLikeJavascript)

// concatination
const a = "my favorite quote";
console.log(a)

console.log("This is " + a)

// Arithmetic operation
let num1 = 9;
let num2 = 3;
let add = num1 + num2;
let multiplication = num1 * num2;
let minu = num1 - num2;
let division = num1 / num2
console.log(add)
console.log(multiplication)
console.log(minu)
console.log(division)

// Boolean Lgic

let toDayIsWeekday = true;
if(toDayIsWeekday){
    console.log("Today is weekday")
}
else{
    console.log("Today is weekend")
}

// Simple conversion program on boolean

// let prodevsMember = ["Mavelous", "Stephen", "Adeleke", "Akinyemi", "Deborah"];
// let teamMember = prompt("Enter your name");

// if(prodevsMember.includes(teamMember)){
//     alert(" You are welcome to the team")
// }
// else{

// alert("You are not a prodev member")};

// temperature conversion

let celcius = -40;
let fahrenheit = (celcius * 9/5 ) + 32;  
console.log("Temperatue in celcius: " + celcius + "c");
console.log("Temperatue in fahrenheit: " + fahrenheit + "c");


// typeof datatype
const studentName = "Muinat";
let num3 = 50;
let iAmProdev = true;
console.log(typeof(studentName));
console.log(typeof(num3))
console.log(typeof(iAmProdev))

let person = {key : "precious"};
let personalPerson = person;
personalPerson.key = "Razaq";
console.log(person)
console.log(personalPerson)

let x = 10;
let y = x;
y = 20;
console.log(x)
console.log(y)
