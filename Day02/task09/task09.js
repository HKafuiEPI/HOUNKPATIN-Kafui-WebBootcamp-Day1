function my_sum(total, value) {
    return total + value;
}
  
function calculateSum(num){
    let sum = num.reduce(my_sum);
    return sum
}

function calculateAverage(num){
    let s = calculateSum(num)
    let r = s / num.length;
    return r
}

module.exports = {
	calculateAverage
}
