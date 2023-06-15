function findLargestElement(n){
    let max = 0
    for(let i = 0; i < n.length; i++){
        if (max < n[i]) max = n[i];
    }
    return max;
}

const array = [570, 2, 9, 1, 70];
const largestElement = findLargestElement(array);
console.log(`The largest element in the array is: ${largestElement}`);