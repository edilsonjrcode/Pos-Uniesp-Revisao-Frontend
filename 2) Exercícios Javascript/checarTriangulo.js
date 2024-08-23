checarTriangulo = (ladoA, ladoB, ladoC) => {
  if (
    ladoA >= ladoB + ladoC ||
    ladoB >= ladoC + ladoA ||
    ladoC >= ladoA + ladoB
  )
    return "none";
  else {
    if (ladoA === ladoB && ladoB === ladoC) return "equilateral";
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) return "scalene";
    else return "isosceles";
  }
};

console.log(checarTriangulo(2, 2, 2));
console.log(checarTriangulo(10, 10, 10));
console.log(checarTriangulo(3, 4, 4));
console.log(checarTriangulo(4, 3, 4));
console.log(checarTriangulo(4, 4, 3));
console.log(checarTriangulo(10, 10, 2));
console.log(checarTriangulo(3, 4, 5));
console.log(checarTriangulo(10, 11, 12));
console.log(checarTriangulo(5, 4, 2));
console.log(checarTriangulo(0, 0, 0));
console.log(checarTriangulo(3, 4, -5));
console.log(checarTriangulo(1, 1, 3));
console.log(checarTriangulo(2, 4, 2));
