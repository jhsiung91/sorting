function bubbleSort(arr) {
  for(var j = 0; j<arr.length; j++){
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] >= arr[i]) {
        var temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    console.log(arr);
    }
  }
  return arr;
}

// [0,-3,5,2,3,4,99,50,5]