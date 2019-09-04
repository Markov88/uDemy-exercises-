function add (arr) {
  let num = parseInt(arr.join('')) + 1
  let result = num.toString().split('')
  return result.map((e) => {
    return parseInt(e)
  })
}
console.log(add([9, 9, 9]))
console.log(add([1, 2, 9]))
