function reverseWords(str){
    words = str.split(" ");
    const revwords = words.reverse();
    const revstr = revwords.join(" ");
    return revstr;
}

module.exports = {
	reverseWords
}