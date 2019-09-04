function highest (arr) {
  let descArr = arr.sort((a, b) => {
    return b - a
  })
  return descArr[0] + descArr[1]
}
console.log(highest([4, 3, 9, 8, 2, 1]))
