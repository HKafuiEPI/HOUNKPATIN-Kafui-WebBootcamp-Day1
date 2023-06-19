/*function calculateDigitSum(num) {
    let sum = 0;
    let dg = num.toString().split('');
    for (let i = 0; i < dg.length; i++) {
      sum += parseInt(dg[i])
    }
    return sum;
}*/

function calculateDigitSum(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
  
  
const number = 12345;
const digitSum = calculateDigitSum(number);
console.log(digitSum);