let numbers = [19, 5, 42, 4, 77];

function sumTwoInt() {
    return sortArr = numbers.sort((a, b) => a - b).slice(0, 2).reduce((sum, cur) => sum + cur, 0)
}

function sumTwoSmallest(numbers) {
  let [a, b] = [...numbers].sort((a, b) => a - b)
  return a + b
}

console.log(sumTwoSmallest(numbers));
