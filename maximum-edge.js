/* Create a function that finds the maximum range of a triangle's
third edge, where the side lengths are all integers. */


function nextEdge(sideOne, sideTwo) {
  return (sideOne + sideTwo) - 1;
}


// Test

console.log(nextEdge(8, 10)) // 17
console.log(nextEdge(5, 7)) // 11
console.log(nextEdge(9, 2)) // 10