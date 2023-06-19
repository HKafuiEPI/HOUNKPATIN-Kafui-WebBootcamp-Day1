/*function findIntersection(arr1, arr2) {
    let inter = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j] && (inter.includes(arr1[i]) == false)) {
          inter.push(arr1[i]);
        }
      }
    }
    return inter;
}*/

function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findIntersection(array1, array2);
console.log(result);