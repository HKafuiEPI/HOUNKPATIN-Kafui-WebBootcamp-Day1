function capitalizeWords(sentence){
    sentence = sentence.split(/[^a-zA-Z]+/);
    for (let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(" ");
    return sentence;
}

const sentence = "the qu-----ick br ow";
const capitalizedSentence = capitalizeWords(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);