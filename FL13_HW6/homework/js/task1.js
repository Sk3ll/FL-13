'use strict';

let maxPercent = 100;
let sum = Number(prompt('Check number:', ''));
let tip = Number(prompt('How much tip(%)?', ''));

(function (){
    if (typeof sum === 'number' && !isNaN(sum) && sum >= 0){
        return parseInt(sum * maxPercent) / maxPercent;
    } else {
        sum = 'Invalid input data';
    }
})();

(function (){
    if (typeof tip === 'number' && !isNaN(tip) && tip >= 0 && tip <= maxPercent){
        return tip;
    } else {
    tip = 'Invalid input data'; 
    }
})();
function checking() {
    return parseInt( tip/maxPercent * sum * maxPercent) / maxPercent;
}
function totalSum(){
    return parseInt( (checking() + sum) * maxPercent) / maxPercent;
}

if (sum === 'Invalid input data' || tip === 'Invalid input data'){
    alert('Invalid input data');
} else {
    alert(
        'Check number: ' + sum +
        '\nTip: ' + tip +
        '\nTip amount: '+ checking() +
        '\nTotal sum to pay:  ' + totalSum()
    );
}