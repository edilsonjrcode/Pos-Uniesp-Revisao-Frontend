min = (array) => {
  minNum = array[0];

  for (item of array) {
    if (item < minNum) minNum = item;
  }

  return minNum;
};

max = (array) => {
    minNum = array[0];

    for (item of array) {
      if (item > minNum) minNum = item;
    }
  
    return minNum;
};

range = (length, last, step) => {
  
};

zip = (...arrays) => {
  // TODO
};

uniq = (array) => {
  // TODO
};

sortNum = (array) => {
  // TODO
};

console.log(min([1, 4, 2, 6, 10, 3]));
console.log(min([1, 4, -1, 6, 10, 3]));
console.log(max([1, 4, 2, 6, 10, 3]));
