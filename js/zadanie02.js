function concatArray(array1, array2){
    const newArray = [];
    for(let i = 0; i < array1.length; i ++){
        newArray.push(array1[i]);
    }
    for(let i = 0; i < array2.length; i ++){
        newArray.push(array2[i]);
    }
return newArray;
}

