function falsy (arr) {
//     let newArr = []
//    for (const el of arr) {
//        if(el){
//            newArr.push(el)
//        }
//    }
//    return newArr

  return arr.filter(e => {
    if (e) {
      return e
    }
  })
}
console.log(falsy([1, 2, 3, '', 0, false, null, undefined]))
