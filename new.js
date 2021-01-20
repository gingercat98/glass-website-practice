console.log("hello world");

// Constant variable, will not change the value 0.3 to 1//
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Primitive value types//
let name = "Mosh"; //String//
let age = 30; //Number//
let isApprove = true; //Boolean//
let firstName = undefined;
let lastName = null; //clear value of variable//


//Dynamic typing: can be change. Javascript is Dynamic//
//Static: can not be changed//
typeof name //type in console will give result "string"//
// it will give what kind of value type//


//Reference value types: objects, array, function//
let name ="Mosh";
let age = 30;

//Object. Rather than having 2 variables as above we can put in one object//
let person = {
  name: "Mosh",
  age: 30
};

//Dot notation. To change person name//
person.name ="John";
//Bracket Notation. To change person name//
person['name'] ="Mary";

console.log(person.name);


//Array. Store list of objects//
let selectColors = ['red', 'blue'];
console.log(selectColors);

console.log(selectColors [0]); //To select red//

selectColor[2] ='green'; //To add green in the array//

console.log(selectColor.length);//To find the length of array//


//Function. Set of Statement perform a list of task//
function greet(name, lastName) { //"name", "lastName" here is a parameter. We can have many parameter//
  console.log('Hello' + name + ' ' +lastName);
}
//Function can have input, by add variable like'name'//
greet('John','Smith'); //John here is an argument//
greet('Mary', 'Le');


//Function calculate a value//
function square(number) {
  return number * number;
}
let number= square(2);
console.log(number);

//////////////////////////////////////////////////////////////////////////
//FREE CODE CAMP JAVASCRIPT//

//VARIABLES//
var myName = "Anh" //Use throughout the program//

myName = 8

let ourName = "Fre code"

const pi = 3.14 //Value will never be changed//

//DECLARING A VARIABLE (uninitialize)//
var a;

//DECLARING AND ASSIGNNING A VARIABLE//
var b = 2;

//ASSIGNNING (initialize)) A VARIABLE//
a = 7;

console.log(a) //To see what inside the console//

// Initialize these variables//
var a = 5;
var b = 5;
var c = 5;

//JAVASCRIPT IS CASE SENSITIVE!//
  //Declaration
  var properWayToWrite ;
  //Assignments
  properWayToWrite = "A string";

//ADDING, SUBTRACT, MULTIPLY, DIVIDE NUMBERS//
var sum = 10 + 10;
var sum = 10 - 10;
var sum = 10 * 10;
var sum = 10 / 10;

//INCREMENTING NUMBER (ADDING MORE NUMBER)//
var myVar = 80;
myVar = myVar + 1;
//Also write as:
myVar++;

//DECREMENTING NUMBER ( subtracting NUMBER)//
var myVar = 80;
myVar = myVar - 1;
//Also write as:
myVar--;

//DECIMAL NUMBER (OR FLOAT)//
var myVar = 9.55;

//MULTIPLY, DIVIDE DECIMAL IS SAME AS NORMAL NUMBER//

//FINDING REMAINDER//
var remainder;
remainder = 11 % 3;
//will result in 2

//ARGUMENT ADITTION, SUBTRACT, MULTIPLY, DIVIDE (SHORTCUT)//
var a = 3;
a = 3 + 2;
//is the same as:
a += 2;

a -= 3; //subtract
a *= 3; //multiply
a /= 3; //divide

//STRING DECLARE//
var firtName = 'Alan';

//ESCAPE A QUOTE, keep quotation mark inside string//
var string = "this is an /"apple"/";

//ESCAPE A QUOTE, keep quotation mark inside string, by using '' rather than ""//
var string = 'this is an /"apple"/'';

//28:02

var myName = "Beau";
var myStr = "My name is " + myName + " and I am well";

//APPEND VARIABLES TO STRINGS//
var someLine = "nice";
var myStr = "Weather is ";
myStr += someLine;
//result : Weather is nice

//Length of a String//
var someLine = "nice";
var howLong = someLine.length;

//Bracket Notation//
var firstLetter = '';
var name = 'Alan';

firstLetter = name [0];
//result in A as first index letter//


//Understand String Immutability, cannot be altered when created//
var myStr = 'Jello World';

myStr [0] = 'H'; //False.Cannot be used as we cannot altered//

myStr = "Hello World"; //TRue//


// Find the Nth Character//
firtName[1];

// Find the Last Character, without knowing how many letter//
var firstName = "Alan";
firsName[firstName.length -1];

// Find the Nth-to-Last Character//
var firstName = "Alan";
firsName[firstName.length -n];

// Word Blanks game using function//
function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
  var result ='';
  result += 'The' + myAdjective + myNoun + myVerb + 'to the store ' + myAdverb
  return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));


// Arrays//
var ourArray = ['John', 23];

//Nest Arrays. Array inside another array//
var ourArray = [ ['John', 23], ["everything",6787] ];

//Access Array Data//
var ourArray = [50,60,23];
var ourData = ourArray[0]; //equal to 50

// Modify Array Data, we can change value inside array unlike in string//
var ourArray = [50,60,23];
ourArray[1] = 45; //equal to 50,45,23

//Access Multi-Dimensional Arrays//
var myArray = [ [1,2,3], [4,5,6], [7,8,9] ]

var myData = myArray[1][2]; //result: 6.
//First [] is for the small array inside big array
//Second [] is for the index of value inside the small array


0:46:30 push()
0:47:29 pop()
0:48:33 shift()
0:49:23 unshift()
0:50:36 Shopping List
0:51:41 Write Reusable with Functions
0:53:41 Arguments
0:55:43 Global Scope
0:59:31 Local Scope
1:00:46 Global vs Local Scope in Functions
1:02:40 Return a Value from a Function
1:03:55 Undefined Value returned
1:04:52 Assignment with a Returned Value
1:05:52 Stand in Line
1:08:41 Boolean Values
1:09:24 If Statements
1:11:51 Equality Operator
1:13:18 Strict Equality Operator
1:14:43 Comparing different values
1:15:38 Inequality Operator
1:16:20 Strict Inequality Operator
1:17:05 Greater Than Operator
1:17:39 Greater Than Or Equal To Operator
1:18:09 Less Than Operator
1:18:44 Less Than Or Equal To Operator
1:19:17 And Operator
Or Operator
Else Statements
 Else If Statements
 Logical Order in If Else Statements
 Chaining If Else Statements
 Golf Code
