function mostFrequentEl (arr) {
  let frequent = {}
  let num = 0
  let x
  for (let letter of arr) {
    if (!frequent[letter]) {
      frequent[letter] = 1
    } else {
      frequent[letter]++
    }
  }

  for (const key in frequent) {
    if (frequent[key] > num) {
      num = frequent[key]
      x = key
    }
  }

  // return  Object.values(frequent).sort((a,b)=> b-a)
  return x
}
// for (let i = 0; i < arr.length; i++) {

//   arr.forEach((e)=>e.)
// }

console.log(mostFrequentEl(['a', 'b', 'c', 'a', 'b', 'a']))
console.log(mostFrequentEl(['a', 'b', 'c', 'a', 'b', 'b']))
