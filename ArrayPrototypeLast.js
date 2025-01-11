Array.prototype.last = function () {
  return this.length <= 0 ? -1 : this.slice(-1)[0];
};

const arr = [1, 2, 3];

console.log(arr.last())