function factorial(n){
    let res = 1;
    for (;n > 0; n--){
        res = res * n;
    }
    return res;
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);