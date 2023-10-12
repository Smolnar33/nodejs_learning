const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

function findMe(target, start, end) {
  if (start > end) {
    return console.log('Not found');
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return console.log(`Found it at index ${middle}`);
  }
  if (arr[middle] > target) {
    return findMe(target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return findMe(target, middle + 1, end);
  }
}

findMe('x', 3, 5);
