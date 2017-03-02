function split(wholeArray) {
    var firstHalf = (wholeArray.slice(0, wholeArray.length/2));
    var secondHalf = (wholeArray.slice(wholeArray.length/2));
    return [firstHalf, secondHalf];
}

function merge(arr1,arr2){
    var comboArr=[];
    var n1 = arr1[0], n2=arr2[0];
    while (arr1 && arr2){
        if (n1<n2){
            comboArr.push(arr1.shift());

        }
        else {
            comboArr.push(arr2.shift());
            
        }

    }



    return comboArr;
}
