function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf = wholeArray.slice(0,wholeArray.length/2);
  var secondHalf = wholeArray.slice(wholeArray.length/2);
  return [firstHalf, secondHalf];
}

function merge(firstHalf,secondHalf){
	return firstHalf.concat(secondHalf);
}

//second = [3,7]
// [3],[7]

//[ 3, 2, 7, 5 ]

function mergeSort(array){

	if(array.length > 1){
		splitArray = split(array);// [firsthalf , second half]
	}
	if(splitArray[0].length >1){
		mergeSort(splitArray[0])
		mergeSort(splitArray[1])
	}

	var newArray = []
	console.log()
	if (splitArray[0] > splitArray[1]){
		newArray.push(splitArray[1])
		newArray.push(splitArray[0])
	}
	else{
		newArray.push(splitArray[0])
		newArray.push(splitArray[1])
	}
	newArray = merge(newArray[0],newArray[1])
	
	return newArray

}

// console.clear();
// var arr = [3,2,-1,0,4,1,6,7];
// // [-1,0,2,3]

// var firstArr = split(arr)[1];
// var secondSplit = split(arr);
// console.log(secondSplit);

// function split(wholeArray) {
//   /* your code here to define the firstHalf and secondHalf arrays */
//   var firstHalf = wholeArray.slice(0,wholeArray.length/2);
//   var secondHalf = wholeArray.slice(wholeArray.length/2);
//   return [firstHalf, secondHalf];
// }

// function merge(firstHalf,secondHalf){
// 	return firstHalf.concat(secondHalf);
// }


// var firstHalf = split(arr)[0][0];
// var secondHalf = split(arr)[0][1];


// function swap(elem1, elem2) {
//   var sortedArr = [];
//   var temp = elem1;
//   if (elem1 > elem2) {
//     elem1 = elem2;
//     elem2 = temp;
//   }
//   sortedArr.push(elem1);
//   sortedArr.push(elem2);
//   return sortedArr;
// }


// var secondArr = swap(firstHalf, secondHalf);

// console.log(firstArr, secondArr);

// function compare(arr1, arr2) {
//   var sorted = [];
//   var arr1count = 0,
//       arr2count = 0;
  
//     while (arr1count < arr1.length || arr2count < arr2.length) {
//     if (arr1[arr1count] < arr2[arr2count]) {
//       sorted.push(arr1[arr1count]);
//       arr1count++;
//     }
//     else {
//       sorted.push(arr2[arr2count]);
//       arr2count++;
//     }
//   }
//    return sorted;
// }

// console.log(compare(firstArr, secondArr));