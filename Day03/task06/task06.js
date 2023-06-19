function factorial(n){
  let res = 1;
  for (;n > 0; n--){
      res = res * n;
  }
  return res;
}

function calculateFactorialSum(num){
  let r = 0
  while (num > 0){
    r += factorial(num)
    num--;
  }
  return r;
}

console.log(calculateFactorialSum(5));