'use strict';

function convert(){
    let arr = [];
    for (let i = 0;i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    for (let i = 0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            arr[i] = Number(arr[i]);
        } else {
            arr[i] = arr[i] + ''
        }
    }
    console.log(arr);
}
//convert('1', 2, 3, '4'); // [1, '2', '3', 4]

function executeforEach(arr, operation){
    arr.forEach(el => {
        operation(el) ;
    });
}

//executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6




function mapArray(array, callback){
    let arr = [];
    executeforEach(array, el => {
        arr.push(
            callback(
                (() => {
                    if (typeof el === 'string'){
                        return el - '';
                    }else {
                        return el;
                    }
                })()// return only numbers
            )
        );
    });
    console.log(arr)
}

//mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

function filterArray(array, callback){
    let arr = [];
    executeforEach(array, el => {
        if (callback(el) === true){
            arr.push(el);
        }
    });
    console.log(arr)
}

//filterArray([2, 5, 8], function(el) { return el % 2 === 0 })  // returns [2, 8]

function containsValue(array, value){
    let x;
    executeforEach(array, el => {
 if(el === value){
 x = true 
} 
})
    x === true?console.log(true):console.log(false);
}

// containsValue([2, 5, 8], 2)  // returns true
// containsValue([12, 4, 6], 5)  // returns false

function flipOver(str){
        let reversedStr = '';
        let i = str.length - 1;
        for (; i >= 0; i--) {
            reversedStr += str[i];
        }
        console.log(reversedStr);
}
//flipOver('hey world') // 'dlrow yeh'

function makeListFromRange(){
    let arr = []
    for (let i = arguments[0][0]; i <= arguments[0][1]; i++){
        arr.push(i)
    }
    console.log(arr)
}
//makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
 
const fruits = [
  { name: `apple`, weight: 0.5 },
  { name: `pineapple`, weight: 2 }
];
function getArrayOfKeys(obj, value){
    let arr=[]
    executeforEach(obj, el => {
        arr.push(
            el[value]
        );
    });
    console.log(arr)
}
 
//getArrayOfKeys(fruits, `name`); // returns [‘apple’, ‘pineapple’]

function substitute (array){
    let topLimit = 20;
    let botLimit = 10;
    mapArray(array, el => {
        if (el > botLimit && el < topLimit){
            return '*';
        } else {
            return el;
        }
    })
}

//substitute([58, 14, 48, 12, 31, 19, 10]); // returns [58, '*', 48, '*', 31, '*', 10]

function getPastDay(date, minusDays){
    let pastDay = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() - minusDays)
    console.log(
        pastDay.getDate()+', ('+
        pastDay.getDate()+' '+Number(pastDay.getMonth()+1)+
        ' '+pastDay.getFullYear()+')'
    );
}

// const date = new Date(2020, 0, 2);

// getPastDay(date, 1); // 1, (1 Jan 2020)
// getPastDay(date, 2); // 31, (31 Dec 2019)
// getPastDay(date, 365); // 2, (2 Jan 2019)

function formatDate(){
    console.log(arguments[0].getFullYear()+'/'+arguments[0].getMonth()+'/'+arguments[0].getDate()+' '+
    arguments[0].getHours()+':'+arguments[0].getMinutes())
}

// formatDate(new Date('6/15/2019 09:15:00')) // "2018/06/15 09:15"
// formatDate(new Date()) // "2020/04/07 12:56" // gets current local time
