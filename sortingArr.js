function asc (arr) {
  return arr.sort((a, b) => {
    return b - a
  })
}
console.log(asc([1, 4, 2, 3]))
console.log(asc([100, 90, 20, 15, 43, 23]))
