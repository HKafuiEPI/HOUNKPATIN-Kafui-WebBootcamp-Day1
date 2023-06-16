function my_sum(total, value) {
  return total + value;
}

function calculateSum(num){
    let sum = num.reduce(my_sum);
    return sum
}

module.exports = {
	calculateSum
}