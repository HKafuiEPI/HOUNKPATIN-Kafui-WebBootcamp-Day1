function my_sum(total, value) {
    if (value % 2 != 0)
        return total + value;
    else
        return total;
}

function sumOfOddNumbers(n){
    return r = n.reduce(my_sum);
}

module.exports = {
	sumOfOddNumbers
}