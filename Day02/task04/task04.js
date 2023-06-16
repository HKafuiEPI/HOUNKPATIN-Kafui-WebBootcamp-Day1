function isPerfectSquare(num) {  
    let sqrt = Math.sqrt(num);  
    if (Number.isInteger(sqrt)) {
        return true;  
    } else {    
        return false;  
    }
}

module.exports = {
	isPerfectSquare
}