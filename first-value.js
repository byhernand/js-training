/* Create a function that takes an array containing
only numbers and return the first element. */


function getFirstValue(list) {
  const firstItem = list.shift();

  console.log(firstItem);
}


getFirstValue([1, 2, 3]) // 1
getFirstValue([80, 5, 100]) // 80
getFirstValue([-500, 0, 50]) // -500