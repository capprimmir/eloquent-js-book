// function that determines if a number is odd or even using recursion 

function isEven (num) {
  if (num == 0){
    return true;
  }
  else if (num == 1){
    return false;
  }
  else {
    return isEven(num-2)
  }
}

console.log(isEven(4));