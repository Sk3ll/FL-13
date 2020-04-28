'use strict';
let min = 0;
let max = 5;
let attempts = 2;
let maxAttempts = 3;
let increaseNum = 2;
let increasePrize = 1;
let userNum;
let botNum;
let prize = 0;
let maxPrize = 100;


let start = confirm('Do you want to play a game?');

if (start === false){
    alert('You did not become a billionaire, but can.');   
} else{
    while(start === true){
        botNum = Math.floor(min + Math.random() * (max + 1 - min));
        let i = 0;
        for (; i <= attempts; i++){
            userNum = Number(prompt(
                'Choose a roulette pocket number from ' +min+' to '+max +
                '\nAttempts left: ' + ( maxAttempts - i) +
                '\nTotal prize: '+prize+ '$' +
                '\nPossible prize on current attempt: '+ increasePrize * maxPrize/Math.pow(increaseNum,i) + '$'
                ));

            if (userNum === botNum){
                prize = prize + increasePrize * maxPrize/Math.pow(increaseNum,i);
                alert('Congratulation, you won!Your prize is: '+ prize +' $');
                let continues = confirm('Do you want to continue?');
                if (continues === false){
                    alert('Thank you for your participation. Your prize is: '+ prize +' $');
                    start = confirm('Do you want to play again?');
                    break;
                } else {
                    max *= increaseNum;
                    increasePrize *= increaseNum;
                }
                break;
            } 
                
            }
            if (userNum !== botNum){
                alert('Thank you for your participation. Your prize is: '+ prize +' $'); 
                start = confirm('Do you want to play again?');
            }
    }
}    
