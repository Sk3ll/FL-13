'use strict';

//import {isBigger} from './isBigger.js'; // for browser
//const { isBigger } = require('./isBigger') //for node
function isBigger (firstNumber, secondNumber) {
    return firstNumber>secondNumber;
}

function countPoints() {
    let points = 0
    for (let i = 0; i < arguments[0].length;i++){
        let x = arguments[0][i].slice(0, (()=> {
            let arr = [];
            let num = parseInt(arguments[0][i].replace(/\D+/g,''));
            for (let j = 0; j < arguments[0][i].length;j++){
            num = arguments[0][i].charAt(j);
            arr.push(num);
            }
            for (let j = 0; j < arr.length;j++){
                if (arr[j] === ':') {
                    return j;
                }
            }
        })() );
        
        let y = arguments[0][i].slice(
            (()=> {
                let arr = [];
                let num = parseInt(arguments[0][i].replace(/\D+/g,''));
                for (let j = 0; j < arguments[0][i].length;j++){
                num = arguments[0][i].charAt(j);
                arr.push(num);
                }
                for (let j = 0; j < arr.length;j++){
                    if (arr[j] === ':') {
                        return j+1;
                    }
                }
            })() );
        if(isBigger(x,y) === true) {
            points += 3;
        } else if(x < y){ 
            points += 0;
        } else {
            points++;
        }
    }
    console.log(points);
    
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12