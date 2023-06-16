function removeFalsyValues(array){
    arr = array.filter(Boolean);
    return arr;
}

module.exports = {
	removeFalsyValues
}
