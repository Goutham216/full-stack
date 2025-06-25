//datatypes in javascript
//Data types in javascript include:

//1.primitive types:
//  - Number:represents both integer and floating-point numbers
//  - String:Represents a sequence of a characters enclosed in single or double quotes
//  - Boolean: Represents a logical entity and can have two values: true or false.
//  - undefined:A VARIABLE that has been declared but not assigned a value.
//  - Null:Represents the intentional absence of any object value.
//  - symbol:A unique and immutable primitive value,oftrn used as object property keys.
//  - -BigInt:Represents integers with arbitary precision useful for large integers.

//2.Non-primitive types:
//  - Object:A collection of properties, where each property is a key-value pair.
//  - Array:a special type of object used to store ordered collection of values.
//  - Function:A callable object that can be invoked to perform a specific task.

//  example of different data types in javascript

// Primitive data types
let Number = 42; //number
let string = "Hello world"; //string
let Boolean = true; //Boolean
let undefinedVar; //undefined //(not assigned a value)
let nullVar = null; //Null
let symbolVar = symbool("unique"); //symbol //(unique identifier) // (often used as object property keys)
let bigIntVar = BigInt(123456789012345678901234567890); //used for large integers

//non-primitive data types
let objectVar = { key: "value"}; //object// (collection key-value pairs)
let arrayVar  = [1,2,3,4,5]; //Array //(ordered collection of values)
let FunctionVar = function() {return "I am a function";}



//output the data types
console.log("Data Types in Javascript:");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefined);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("BigInt:", bigIntVar);
console.log("Object:",objectVar);