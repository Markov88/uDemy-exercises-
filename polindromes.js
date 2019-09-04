function polindromes (word) {
  return (word === word.split('').reverse().join(''))
}
console.log(polindromes('abba'))
console.log(polindromes('barik'))
