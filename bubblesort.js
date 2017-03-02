function bubbleSort(arr){

    for(var j=0; j<arr.length-1; j++){
        for(var i=0; i<arr.length-1; i++){
             if(arr[i] > arr[i+1]){
                arr = swap(arr, i);
             }
        }

    }
    return arr;
}

function swap(arr, i){
    var higher = arr[i],
        lower = arr[i+1];
            
        arr[i] = lower;
        arr[i+1] = higher;

    return arr;
} 
        