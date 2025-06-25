let a = 10;
let b = 5;
console.log("Arithmetic operators");
console.log("a=",a",b=",b);
let sum = a+b;
let difference =a-b;
let product =a*b;
let quotient =a/b;
let remainder =a%b;
let exponent =a**b;
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()


let x=10;
x += 5;
x -= 3;
x*= 2;
x/= 4;
x%= 3;
console.log("Assignment Operators:");
console.log("x after assignments:",x);
console.log("\n");

//3.comparision operators
// used to compare two values and return
let isEqual =(a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStricNottEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comparision Operators:");
console.log("Is Equal:",isEqual);
console.log("isStrictEqual:",isStrictEqual);
console.log("isNotEqual:",isNotEqual );
console.log("isStricNottEqual:",isStricNottEqual);
console.log(":");









//4.logical operators

let andOperator = (a > 0 && b > 0);
let orOperator = (a > 0 || b < 0);
let notOperator = !(a < b);
console.log("Logical Operators")
console.log("AND Operators", andOperator);
console.log("NOT Operator:", notOperator);
console.log("\n");

//5.Bitwise Operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("Bitwise operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("Left Shift:", leftshift);
console.log("Right Shift:", rightshift);
console.log("\n");

//6.Ternary Operator
let age = 18;
let eligibility = (age >= 18)? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");

//7.Typeof Operator
let VariableType = typeof a;
console.log("Typeof Operator")
console.log("Type of Variable 'a':",VariableType);
console.log("\n");