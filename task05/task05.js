function isPalindrome(str) {
    str = str.toLowerCase();
    let a = 0;
    let i = 0, v = 0, nv = "";
    for (let j = 0; j < str.length; j++){
        if (str[j] >= 'a' && str[j] <= 'z'){
            nv += str[j]; 
        }
    }
    a = nv.length - 1;
    for (i = 0; i < nv.length && a >= 0; i++){
        if (nv[i] == nv[a]){
            v++;a--;
        }
    }
    if (v == nv.length) return true;
    else return false;
    
}