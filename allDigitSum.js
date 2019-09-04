function sum (num) {
  let sNumber = num
    .toString()
    .split('')
    .reduce((el1, el2) => {
      return Number(el1) + Number(el2)
    }, 0)
  return sNumber
}

console.log(sum(123))
console.log(sum(456))
