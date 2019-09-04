// function sumArr (el) {
//     let x = 0
//     for (let index of el) {
//         x += index
//     }
//     return x
// }

// function sumArr (el) {
//     let result = 0
//     el.forEach((e) => {
//         result += e
//     })
//     return result
// }
function sumArr (el) {
  return el.reduce((sum, currentel) => {
    return sum + currentel
  }, 0)
}

console.log(sumArr([1, 2, 3, 4]))
console.log(sumArr([4, 5, 6, 7]))
