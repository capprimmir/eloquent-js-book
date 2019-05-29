// function that returns an array with all numbers within a given range

function range(start, end, step = 1) {
  numbers = []
  for (i = start; i <= end; i += step){
    numbers.push(i)
  }
  return numbers;
}
var test = range(1,10)
console.log(test);

// function that returns the sum of an array
function sum(array) {
  total =  0;
  for (let number of array){
    total += number;
  }
  return total;
}
console.log(sum(test));