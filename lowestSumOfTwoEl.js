function lowest (arr) {
  return arr
    .sort((a, b) => { return b - a })
    .splice(arr.length - 2)
    .reduce((a, b) => {
      return a + b
    })
}
console.log(lowest([4, 3, 9, 8, 2, 1]))
console.log(lowest([100, 400, 140, 345, 145]))
