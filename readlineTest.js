const prompt = require('prompt-sync')({sigint: true});

const num = prompt('Enter a number: ');
console.log(`Your number + 4 = ${Number(num) + 4}`);