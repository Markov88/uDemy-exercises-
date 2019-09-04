function reversedString (strings) {
  return strings.split('')
    .reverse()
    .join('')
}
console.log(reversedString('hi'))
console.log(reversedString('hello'))
console.log(reversedString('Reverse Me'))
