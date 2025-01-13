var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  return strs.reduce((prefix, curStr) => {
    let i = 0;

    while(i < prefix.length && i < curStr.length && prefix[i] === curStr[i]) {
        i++
    }

    return prefix.slice(0, i)
  });
};

console.log(longestCommonPrefix((strs = ["flower", "flow", "flight"])));
