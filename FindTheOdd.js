let A = [0, 1, 0, 1, 0];

function findOdd(A) {
  return Object.entries(
    A.reduce((count, num) => {
      count[num] = (count[num] || 0) + 1;
      return count;
    }, {})
  ).find(([_, count]) => count % 2 !== 0)[0];
}

// 

function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd(A));
