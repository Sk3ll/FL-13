function letterCount(word, letter){
    let arr = [];
    let sum = 0;
    let num = parseInt(word.replace(/\D+/g,''));
    for (let i = 0; i < word.length;i++){
        num = word.charAt(i);
        arr.push(num);
    }
    for (let i = 0; i < arr.length;i++){
        if (arr[i] === letter || arr[i] === letter.toUpperCase()) {
            sum++;
        }
    }
    console.log(sum);
}

letterCount("Maggy", "g") // => 2
letterCount("Barry", "b") // => 1
letterCount("", "z") // => 0
