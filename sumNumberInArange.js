function sumInRange (num) {
  let index = 0
  let number = num.split('-')

  for (let i = +number[0]; i <= +number[1]; i++) {
    index += i
  }
  return index
}
console.log(sumInRange('1-4'))
console.log(sumInRange('10-20'))
