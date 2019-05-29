// function that takes an array and reverse it

function reverseArray(array) {
  // return array.reverse();
  var newArray = [];
  for (i = array.length -1; i >= 0; i --){
    newArray.push(i+1);
  }
  return newArray;
}

console.log(reverseArray([1,2,3,]));