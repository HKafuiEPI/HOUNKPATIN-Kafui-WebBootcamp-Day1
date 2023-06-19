function isValidPassword(pass){
return pass.length >= 8 && /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /\d/.test(pass);
}


const password = "MyPassword123!";
const isValid = isValidPassword(password);
console.log(isValid);