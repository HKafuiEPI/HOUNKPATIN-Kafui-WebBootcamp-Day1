function findMissingNumber(array){
    let miss = []
    let a = Math.max.apply(null, array)
    for (let i = 1; i <= a; i++){
        if (array.includes(i) == false) miss.push(i)
    }
    return miss
}

const array = [1, 2, 4, 5, 6, 9, 15];
console.log(findMissingNumber(array));