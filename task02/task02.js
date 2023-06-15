function isPrime(n){
    let a = 0;
    for(let i = 1; i <= n; i++){
        if (n % i == 0) a++;
    }
    if (a == 2) return true;
    else return false;
}

const number = 20;
const isNumberPrime = isPrime(number);
console.log(`Is ${number} prime? ${isNumberPrime}`);