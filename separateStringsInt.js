function separate (input) {
    let x
    if (typeof (input) !== 'object') {
        x = input.slice().split('')
    } else { x = input.slice() }

    return x.map((e) => {   
        return Number(e)
    })
        .filter((e) => {
            return Number(e)
        })
        .join('')
}
console.log(separate('hello1234'))
console.log(separate(['h', 2, 'e', 'l', 1, 'o', 3, 4]))
