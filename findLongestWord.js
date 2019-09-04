function findLongestWord (words) {
  //   return words
  //     .join('')
  //     .split(' ')
  //     .sort((a, b) => { return a.length - b.length })
  //     .pop()
  let arr = words.split(' ')
  return arr.sort((a, b) => {
    return b.length - a.length
  })[0]
}
console.log(findLongestWord('The quick brown fox jump over the lazy dog'))
