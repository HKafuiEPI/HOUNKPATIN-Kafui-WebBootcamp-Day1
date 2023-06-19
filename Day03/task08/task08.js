function findLongestWord(arr){
    let m = 0, ind = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > m){
            ind = i; m = arr[i].length
        }
    }
    return arr[ind]
}


const wordArray = ["cat", "elephant", "dog", "giraffe", "zebra"];
console.log(findLongestWord(wordArray));