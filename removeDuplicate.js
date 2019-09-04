function remove (word) {
  let newArr = []
  let arr = word.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr.push(arr[i])
    }
  }
  return newArr.join('')
}

// return word
//     .split('')
//     .filter((current, index, self) => {
//         return self.indexOf(current) == index
//     })
//     .join('')

console.log(remove('hello'))
console.log(remove('greeting'))
