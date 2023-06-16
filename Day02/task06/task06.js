function calculateSum(num){
    let r = 0;
    for (let i = 0; i < num.length; i++){
        r += num[i];
    }
    return r;
}

module.exports = {
	calculateSum
}