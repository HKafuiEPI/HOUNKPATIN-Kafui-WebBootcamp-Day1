function my_prod(total, value) {
    return total * value;
}
  
function calculateProduct(num){
    let prod = num.reduce(my_prod);
    return prod
}

module.exports = {
	calculateProduct
}