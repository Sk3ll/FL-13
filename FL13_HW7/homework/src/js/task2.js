//         Step 1:
// confirm(‘Do you want to play a game?’)).
// if (In case the user clicks the 'Cancel' button){ 
    //alert (the message 'You did not become a billionaire, but can.') 
//         Step 2:
// }else (ser clicked ‘Ok)’ {
    //while (start a game): 
    //randomly (use Math.random()) choose an integer number in range [0; 5] (including 0 and 5) 
//and use prompt(ask user to enter a number of pocket on which the ball could land) .
// for (User has 3 attempts to guess a number). {

    // If (user guessed the number on which ball landed), {
        //on 1-st attempt prize is 100$ (maximum prize for current numbers range), //2-nd attempt – 50$, 3-rd attempt – 25$. 
    //} else (If user did not guess){
        // a number show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) 
    //and ask confirm (if he wants to play again) (use confirm).
//          Step 3:
// If (user did guess) - {
    //Show the message ‘Congratulation, you won!   Your prize is: … $. Do you want to continue?’.

        // If (user does not want to continue)  {
        //show the message alert(‘Thank you for your participation. Your prize is: … $’) (Use alert) 
        //and ask confirm(if he wants to play again).
            // If (user want to continue), {make number range bigger at 5 as the previous one (for example [0; 5] -> [0; 10]), 
            //and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). 
            //Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number 
            //for each numbers range)}
    // }
//}
// Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total 
//prize and possible prize on current attempt. See Figure 1:


// All these stuffs should be repeated until user lose or decide to quit
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
        console.log('botNum: ' + botNum)
        let i = 0;
        for (; i <= attempts; i++){
            userNum = Number(prompt(
                'Choose a roulette pocket number from ' +min+' to '+max +
                '\nAttempts left: ' + ( maxAttempts - i ) +
                '\nTotal prize: '+prize+ '$' +
                '\nPossible prize on current attempt: '+ increasePrize * maxPrize/Math.pow(increaseNum,i) + '$', 
                '' ));
            console.log('userAttempts: ' + userNum);

            if (userNum === botNum){
                prize = prize + increasePrize * maxPrize/Math.pow(increaseNum,i);
                let continues = confirm('Congratulation, you won!  Your prize is: '+ prize +' $. Do you want to continue?');
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
            alert(start)
    }
}    
