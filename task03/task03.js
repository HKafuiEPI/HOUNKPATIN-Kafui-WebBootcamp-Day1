function findLargestElement(n){
    let max = 0
    for(let i = 0; i < n.length; i++){
        if (max < n[i]) max = n[i];
    }
    return max;
}
