function sumOfOddNumbers(n){
    let r = 0;
    for (let i = 0; i < n.length; i++){
        if (n[i] % 2 != 0) r += n[i];
    }
    return r;
}

module.exports = {
	sumOfOddNumbers
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddSum = sumOfOddNumbers(numbers);
console.log(oddSum);