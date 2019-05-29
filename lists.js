// takes an array and converts to a list
function arrayToList(array) {
  let list = null
  for (let i=array.length -1; i>=0; i--){
    list = { value: array[i], rest: list}
  }
  return list;
}

// takes a list and converts it to an array
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

// helper function that takes an element and a list and adds it to the front of the list
function prepend (value, list) {
  return {value, rest: list};
}

// return element at a givenn position
function nth (list, number) {
  if (!list) return undefined;
  else if (number == 0) return list.value;
  // recursive
  else return nth(list.rest, number-1);
}


console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 4));
