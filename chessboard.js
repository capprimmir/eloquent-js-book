/* 
create a string that represents 8x8 grid,
using new lines to separate lines
*/

let size = 8
let chessboard = " "

for (let size = 0; size < 8; size++){
  for (let width = 0; width < 8; width++){
    if ((size + width) % 2 == 0 ){
     chessboard += "#";
    }
    else { 
     chessboard += " ";
    }
  }
  chessboard += "\n";
}
console.log(chessboard)