function inArray(arr , n){
    let i = 0;
    for (i = 0; i < arr.length ; i++){
        if (arr[i] == n) return true;
    }
    return false;
}

function removeDuplicates(array){
    arr = [];
    for (let i = 0; i < array.length; i++){
        if (inArray(arr, array[i]) == false){
            arr.push(array[i]);
        }
    }return arr;
}

const array = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueArray = removeDuplicates(array);
console.log("Array with duplicates:", array);
console.log("Array without duplicates:", uniqueArray);