function consist (word, letter) {
  let lastEl = word
    .split('')
    .pop()
  return (lastEl === letter[0])  
   
}
console.log(consist('hello', 'x'))
