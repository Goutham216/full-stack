// Example of if, else if, else
let age = 18;
if(age < 18) {
    console.log("you are a minor.");
}
else if(age >= 18 && age < 65) {
    console.log("you are an adult.");
}
else {
    console.log("you are a senior citizen.");
}
console.log("\n");

//Example of switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}

for(let i = 0; i < 5; i++) {
    console.log("Iteration:",i);
}

//add a new line
console.log("\n");

//Example of while loop
let j = 0;
while(j < 5) {
    console.log("while loop Iteartion:",j);
    j++;
}

console.log("\n");
//Example of do...while loop
let k = 0;
do {
    console.log("Do..while loop Iteration:",k);
    k++;
}while (k < 5);