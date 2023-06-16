function findFirstIndex(array, element){
    for (let i = 0; i < array.length; i++){
        if (element == array[i]){
            return i;
        }
    }
    return -1;
}