/*function checkpass(pass){
    let a, b, c,d;
    for (let i = 0; i < pass.length; i++){
        if (pass[i] >= 'a' && pass[i] >= 'z') a = 1
        else if (pass[i] >= 'A' && pass[i] >= 'Z') b = 1
        else if (pass[i] >= '0' && pass[i] >= '9') c = 1
        else d = 1;
    }
    if (a == 1 && b == 1 && c == 1 && d == 1) return true
    else false
}*/

function checkpass(pass) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
  }
  

function generateRandomPassword(len){
    var pass = ""
    var dico = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < len; i++){
        let o = Math.floor(Math.random() * (dico.length));
        pass += dico[o];
    }
    if (checkpass(pass) == true && len >= 8) return pass;
    else return ""
}


const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);