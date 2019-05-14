// count number of 'B's in a string

function countB (word) {
  totalB = 0;
  for (i = 0; i <= word.length; i++){
    if (word[i] == 'B') {
      totalB += 1;
    }
  }
  return totalB;
}

console.log(countB('BueBnoB Bueno'));


// count any letter in word
function countChar (word, letter) {
  totalCount = 0;
  for (i = 0; i <= word.length; i++){
    if (word[i] == letter) {
      totalCount += 1;
    }
  }
  return totalCount;
}

console.log('Count letter ' + countChar('todotodo todo', 'o'));