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