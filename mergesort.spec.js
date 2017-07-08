describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
  	 expect(split([5, 2, 3, 7])).toEqual([[5, 2],[3, 7]]);
    // your code here  
  });
});
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
  	 expect(split([5, 7])).toEqual([[5],[7]]);
    // your code here  
  });
});
describe('Split Array function', function() {
  it('is able to split an array into two halves of odd number', function() {
  	 expect(split([5, 3, 7])).toEqual([[5],[3, 7]]);
    // your code here  
  });
});
describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
     expect(merge([5],[7])).toEqual([5, 7]);
  });
});
describe('Merge Sort', function(){
  it('merge sort 2 items ', function(){
    // test the merging algorithm
     expect(mergeSort([5,7])).toEqual([5, 7]);
  });
});
describe('Merge Sort', function(){
  it('merge sort reverse 2 items ', function(){
    // test the merging algorithm
     expect(mergeSort([7,5])).toEqual([5, 7]);
  });
});

describe('Merge Sort', function(){
  it('merge sort reverse 4 items ', function(){
    // test the merging algorithm
     expect(mergeSort([3,2,7,5])).toEqual([2, 3, 5, 7]);
  });
});