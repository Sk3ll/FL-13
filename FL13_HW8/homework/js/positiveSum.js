function positiveSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>0){
            sum += arr[i]
        }
    }
    console.log(sum);
}


positiveSum([2, 4, 6, 8]);
positiveSum([0, -3, 5, 7]) ;
