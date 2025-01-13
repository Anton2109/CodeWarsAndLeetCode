function getCount(str) {
    return [...str].reduce((acc, cur) =>
        cur.match(/[aeiou]/i) ? acc + 1 : acc, 0
    )
}

console.log(getCount('abracadabra'))