function checkAnagrams(string1, string2){
    let len1 = string1.length;
    let len2 = string2.length;
    if(len1 !== len2){
        return -1
    }
    let str1 = string1.split('').sort().join('');
    let str2 = string2.split('').sort().join('');
    if(str1 == str2){
        return true
    } else { 
        return false
    }
}

const string1 = "listen";
const string2 = "silent";
console.log(checkAnagrams(string1, string2));