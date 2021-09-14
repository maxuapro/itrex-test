let arr = ['1sdf', 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]

const cutterOnTwenty = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i += 5) {
        let slice = arr.slice(i, i + 5)
        newArr.push(slice)
    }
    return newArr
}

let sdf = cutterOnTwenty(arr)

console.log(sdf[0])


        // const sorted = data.sort((elem1, elem2) => elem1.id - elem2.id)