function bigestSumOfTwoElements(arr){
    let arraySum = 0;
    if(arr.length === 1){
        arraySum = arr[0];
    }
    else if (arr.length > 1){
        let sortedArray = arr.sort((a, b) => (b - a));
        arraySum = sortedArray[0] + sortedArray[1];
    }
    else {
        arraySum = false;
     } 
    return arraySum;
}
bigestSumOfTwoElements([1,2,3,4]);



