function allDigitsInNumber (number) {
  return number
    .toString()
    .split('')
    .reduce((a, b) => {
      return parseInt(a) + parseInt(b)
    })
}
console.log(allDigitsInNumber(123))
console.log(allDigitsInNumber(1234))
console.log(allDigitsInNumber(8345))
