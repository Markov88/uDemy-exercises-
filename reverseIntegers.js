function reverse (int) {
  let y = int
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(y) * (Math.sign(int))
}

console.log(reverse(123))
console.log(reverse(-123))
