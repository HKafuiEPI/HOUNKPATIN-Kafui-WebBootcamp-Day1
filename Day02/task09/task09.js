function calculateSum(num){
    let r = 0;
    for (let i = 0; i < num.length; i++){
        r += num[i];
    }
    return r;
}

function calculateAverage(num){
    let s = calculateSum(num)
    let r = s / num.length;
    return r
}

module.exports = {
	calculateAverage
}
