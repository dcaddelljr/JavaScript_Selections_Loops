console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//Ex. 1
for (let numbers = 1; numbers <= 100; numbers++) {
    if (numbers % 2 != 0) {
        console.log(`${numbers}  odd`);
    } else {
        console.log(`${numbers}  even`);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//Ex. 2
for (let numbers = 1; numbers <= 100; numbers++) {
    if (numbers  % 3 == 0 && numbers % 5 == 0){
        console.log(`${numbers} FIZZBUZZ`);
    } else if(numbers % 3 == 0) {
        console.log(`${numbers} FIZZ.`);
    } else if (numbers % 5 == 0) {
        console.log(`${numbers} BUZZ.`);
    }
}

console.log("EXERCISE 3:\n==========\n");
//Ex. 3.a
numbers = 1;
while (numbers <= 100) {
    if (numbers % 2 != 0) {
        console.log(`${numbers} is odd`);
        numbers++;
    } else {
        console.log(`${numbers} is even`);
        numbers++;
    }
}
//Ex. 3.b
numbers = 1;
do {
    if (numbers  % 3 == 0 && numbers % 5 == 0){
        console.log(`${numbers} FIZZBUZZ`);
    } else if(numbers % 3 == 0) {
        console.log(`${numbers} FIZZ`);
    } else if (numbers % 5 == 0) {
        console.log(`${numbers} BUZZ`);
    }
    numbers++;
}  
while (numbers <= 100);

console.log("EXERCISE 4:\n==========\n");  

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 
    
var i = 0;

for (; i <= n; i++)
    if (i == value){
        console.log(`Found the ${value}.`);
        break;
    }
    if (i != value){
        console.log(`Did not find ${value}.`)
    }

console.log("EXERCISE 5:\n==========\n");  

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= num; i++) {
    if (i  % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i} FIZZBUZZ`);
    } else if(i % fizzDivisor== 0){
        console.log(`${i} FIZZ.`);
    } else if (i % buzzDivisor == 0){
        console.log(`${i} BUZZ.`);
    }
}

console.log(`fizzDivisor: ${fizzDivisor}`);
console.log(`buzzDivisor: ${buzzDivisor}`);
console.log(`start: ${start}`);
console.log(`num: ${num}`);