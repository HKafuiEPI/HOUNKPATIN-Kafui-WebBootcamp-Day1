function calculatePower(base, exponent) {
    if (exponent < 0) return -1;
    let r = Math.pow(base, exponent);
    return r;
}

module.exports = {
	calculatePower
}