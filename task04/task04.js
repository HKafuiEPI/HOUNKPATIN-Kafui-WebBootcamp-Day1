function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);