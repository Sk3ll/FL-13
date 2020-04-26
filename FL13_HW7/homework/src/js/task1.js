// Step 1. Check login
// Ask user for a login // use prompt()
// If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”. 
// If it’s another string – then show “I don’t know you”.
// If the visitor enters "User" or "Admin", then prompt for a password.

// Step 2. Check password:
// For an empty string or cancelled input, show “Canceled.”
// For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”. In other case, show “Wrong password”.

// Step 3. Greets the user appropriately:
// If the current time in hours is less than 20: // current hours – new Date().getHours()
// For “User” show “Good day, dear User!”
// For “Admin” show “Good day, dear Admin!”
// If the current time in hours is more or equals 20
// For “User” show “Good evening, dear User!”
// For “Admin” show “Good evening, dear Admin!”
'use strict';

let userLogin = prompt('check login', '');
let login = [];
let password = {
    'User': 'UserPass',
    'Admin': 'RootPass' 
};
let userPass;
let currentHours = new Date().getHours();
let night = 20;
let morning = 8;
let maxSymbols = 4;

if (userLogin === null || !isNaN(userLogin)){
    alert('Canceled.');    
} else{
let num = parseInt(userLogin.replace(/\D+/g,''));
for (let i = 0; i < userLogin.length;i++){
    num = userLogin.charAt(i);
    login.push(num);
}
if (login.length < maxSymbols){
    alert("I don't know any users having name length less than 4 symbols");    
} else

if (userLogin === 'User' || userLogin === 'Admin'){
    userPass = prompt('check password');
    if (userPass === null) {
        alert('Canceled.');
    }
    switch (userPass){
        case password['User']: 
            if (currentHours < night && currentHours >= morning){
                alert('Good day, dear User!');
            } else {
                alert('Good night, dear User!');
            }
            break;
        case password['Admin']: 
            if (currentHours < night && currentHours >= morning){
                alert('Good day, dear Admin!');
            } else {
                alert('Good night, dear Admin!');
            }
            break;
        default: 
            alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
}

