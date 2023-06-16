function calculateProduct(num){
    let r = 1;
    for (let i = 0; i < num.length; i++){
        r *= num[i];
    }
    return r;
}

module.exports = {
	calculateProduct
}