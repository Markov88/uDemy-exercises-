function nonRepeating (input) {
  let object = {}
  let letter
  for (let letter of input) {
    if (!object[letter]) {
      object[letter] = 1
    } else {
      object[letter] += 1
    }
  }

  for (let key in object) {
    if (object[key] === 1) {
      letter = key
      break
    }
  }
  return letter
}
console.log(nonRepeating('hello'))
