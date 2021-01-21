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


//push(). Add another array inside an array //
var ourArray = ['sad', 'J', 'cat'];
ourArray.push( ['happy', 'joy']);
//equal ['sad', 'J', 'cat', ['happy', 'joy']]

//pop(). Remove an item in the array//
var ourArray = ['sad', 'J', 'cat'];
var removeOurArray = ourArray.pop();
//removeOurArray equal 'cat', ourArray equal ['sad', 'J']


// shift(). Remove the first element of array//
var ourArray = ['sad', 'J', 'cat'];
var removeOurArray = ourArray.shift();
//removeOurArray equal 'sad', ourArray equal ['J', 'cat']


// unshift(). Add element to the beginning of the array//
var ourArray = ['sad', 'J', 'cat'];
ourArray.shift(); //removeOurArray equal 'sad', ourArray equal ['J', 'cat']
ourArray.unshift('happy');
//ourArray equal ['happy', 'J', 'cat']//

// Shopping List. example for nested array//
var myList = [ ['cereal',3], ['milk',2], ['bananas',3], ['juice',e], ['eggs',12]];

//Write Reusable with Functions//
function ourName() {
  console.log('Hi world');
}
ourName(); //function is being called//
ourName();
ourName();

//Arguments//
function ourFunction(a,b) {
  console.log(a-b);
}
ourFunction (10,5); //output 5


//Global Scope. Visibility of function//
var myGlobal = 10;
.....

//Local Scope. variable only visible inside a function//
function myLocalScope() {
  var myvar = 5;   //local scope
  console.log(myvar); //result show 5
}
myLocalScope();
console.log(myvar); //will be error since it want to acess the var outside a function

 //Global vs Local Scope in Functions//
 //We can have both Global vs Local Scope at the same name//

 var outWear = 'T-shirt'; //Gobal scope as it is declared outside function//

 function myOutfit() {
   var outerWear = "sweater"
   return outerWear;
 }

 console.log(myOutfit()); //Result "sweater"


//Return a Value from a Function//
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));


// Undefined Value returned//
var sum = 6 ;
function addFive() {
  sum += 5; //Will not return aything since we not put rerturn before var//
}

// Assignment with a Returned Value//
var changed = 0; //global variable

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);

//Stand in Line//
check again...


//Boolean Values. TRue or False//
function welcomeToBoolean() {
  return true;
}


//If Statements//
function ourTRueORFAlse(isItTrue) {
  if (isItTRue) {
    return "Yes, it is true";
  }
  return "No it is not true";
}

// Equality Operator == //
function test (val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(test(10)); //result not equal

// Strict Equality Operator ===, more sensitive like string number //
/*
3 === 3 true
3 === '3'  false
*/


// Comparing different values //
function test (val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(test("12")); //result  equal eventhough it a string not number


// Comparing with Inequality Operator (not equal)  != //
function test (val) {
  if (val != 12) {
    return "Not Equal";
  }
  return " Equal";
}
console.log(test(10)); // not Equal


// Strict Inequality Operator, more sensitive to different value types string, number,.. //
// !== //


// Greater Than Operator > //
function test (val) {
  if (val > 12) {
    return "over";
  }
  return " not over";
}
console.log(test(10)); // not over

// Greater Than Or Equal To Operator >= //

// Less Than Operator < //

// Less Than Or Equal To Operator <= //

// And Operator &&. Check if 2 things are true at the same time//
function test (val) {
  if (val > 12 && val >50) {
    return "yes";
  }
  return " no";
}
console.log(test(10));


//Or Operator || //
function test (val) {
  if (val > 12 || val >50) {
    return "yes";
  }
  return " no";
}
console.log(test(10));

// Else Statements //
function test (val) {
  if (val > 12 || val >50) {
    return "yes";
  }
  else {
    return " no";
}
console.log(test(10));


 // Else If Statements. Multiple conditions//
 function test (val) {
   if (val > 10) {
     return "yes";
   }
   else if (val <5) {
     return " no";
 }
    else {
      return "cancel"
    }

 // Logical Order in If Else Statements //
//order of value is important //


 // Chaining If Else Statements //
function test(number) {
  if (number < 5) {
    return 'Tiny';
  }
  else if (number < 10) {
    return 'Small';
  }
  else if (number < 15) {
    return 'Medium';
  }
  else if (number < 20) {
    return 'Large';
  }
  else {
    return 'Huge';
  }
}
console.log(test(7));


//Golf Code example//

// Switch Statements, instead of if else //
function caseSwitch (val) {
  var result = '';
  switch (val) {
    case 1:
      answear = "alpha";
      break;
    case 2:
      answear = "beta";
      break;
    case 3:
      answear = "gamma";
      break;
    case 4:
      answear = "delta";
      break;
  }
  return result;
}
console.log(caseSwitch(1));


// Default Option in Switch Statements. default = Kinda like else //
function caseSwitch (val) {
  var result = '';
  switch (val) {
    case 1:
      answear = "alpha";
      break;
    case 2:
      answear = "beta";
      break;
    case 3:
      answear = "gamma";
      break;
    case 4:
      answear = "delta";
      break;
    default:
      answear = "others";
      break;
  }
  return result;
}
console.log(caseSwitch(1));

// Identical Options in Switch Statements, when multiple input //
function size(val){
  var result ='';
  switch (val) {
    case 1:
    case 2:
    case 3:
      answear ='low';
      break;
    case 4:
    case 5:
    case 6:
      answear ='mid';
      break;
    case 7:
    case 8:
    case 9:
      answear ='high';
      break;
  }
  return result;
}

// Replacing If Else Chains with Switch //

// Returning Boolean Values from Functions //


// Return Early Pattern for Functions //

// Counting Cards //

// Build Objects. Similar to array//
var ourDog ={ //object
  'name': 'Max',
  'legs' : 4,
  'tails' : 1,
  'friends' : ['everything!']
};

var myDog = { //object
  'name': 'Lulu',
  'legs' : 3,
  'tails' : 2,
  'friends' : []
}


// Dot Notation .value//
var test = {
  'hat': 'ballcap',
  'shirt': 'jersey'
};

var hatValue = test.hat; // 'ballcap'
var shirtValue = test.shirt; //'Jersey'

// Bracket Notation //
// Variables //
1:53:34 Updating Object Properties
1:54:30 Add New Properties to Object
1:55:19 Delete Properties from Object
1:55:54 Objects for Lookups
1:57:43 Testing Objects for Properties
1:59:15 Manipulating Complex Objects
2:01:00 Nested Objects
2:01:53 Nested Arrays
2:03:06 Record Collection
2:10:15 While Loops
2:11:35 For Loops
2:13:56 Odd Numbers With a For Loop
2:15:28 Count Backwards With a For Loop
2:17:08 Iterate Through an Array with a For Loop
2:19:43 Nesting For Loops
2:22:45 Do...While Loops
2:24:12 Profile Lookup
2:28:18 Random Fractions
2:28:54 Random Whole Numbers
2:30:21 Random Whole Numbers within a Range
2:31:46 parseInt Function
2:32:36 parseInt Function with a Radix
2:33:29 Ternary Operator
2:34:57 Multiple Ternary Operators
2:36:57 var vs let
2:39:02 var vs let scopes
2:41:32 const Keyword
2:43:40 Mutate an Array Declared with const
2:44:52 Prevent Object Mutation
2:47:17 Arrow Functions
2:28:24 Arrow Functions with Parameters
2:49:27 Higher Order Arrow Functions
2:53:04 Default Parameters
2:54:00 Rest Operator
2:55:31 Spread Operator
2:57:18 Destructuring Assignment: Objects
3:00:18 Destructuring Assignment: Nested Objects
3:01:55 Destructuring Assignment: Arrays
3:03:40 Destructuring Assignment with Rest Operator to Reassign Array
3:05:05 Destructuring Assignment to Pass an Object
3:06:39 Template Literals
3:10:43 Simple Fields
3:12:24 Declarative Functions
3:12:56 class Syntax
3:15:11 getters and setters
3:20:25 import vs require
3:22:33 export
3:23:40 * to Import
3:24:50 export default
3:25:26 Import a Default Export
