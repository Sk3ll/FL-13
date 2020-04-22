'use strict';

let message;
let word = [];
let half = 2;
message = prompt('Input word', '');


if (message === null || !isNaN(message)){
    alert('Invalid value');
} else {
    let num = parseInt(message.replace(/\D+/g,''));

    for (let i = 0; i < message.length;i++){
        num = message.charAt(i);
        word.push(num);
    }
    if (word.length % half === 0) {
        alert( word [ word.length / half - 1 ] + word [ word.length / half ] );
    } else {
    alert(word[Math.floor(word.length/half)]);
    }
}