const prompt = require('prompt-sync')({sigint: true});

// const num = prompt('Enter a number: ');
// console.log(`Your number + 4 = ${Number(num) + 4}`);

const hour = prompt('Enter an hour value (1-12): ');
const minute = prompt('Enter a minute value (0-59): ');

const minuteHand = 360 * (minute / 60);
const hourHand = (360 * (hour / 12) % 360) + (30 * (minute / 60));

const angle = Math.abs(minuteHand - hourHand);

console.log(minuteHand)
console.log(hourHand)
console.log(angle)
