'use strict';
function isBigger (firstNumber, secondNumber) {
    return firstNumber>secondNumber;
}

function getDifference(a, b){
    let sum;
    if (isBigger(a,b) === true ){
        sum = a - b;
    } else{
        sum = b - a;
    }
    console.log(sum);
}

getDifference(5, 3) // => 2
getDifference(5, 8) // => 3