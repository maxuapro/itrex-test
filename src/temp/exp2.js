let len = 45
let divider = 5
const retPages = (num, div) => {
    return num % div === 0 ? num / div : Math.trunc(num / div) + 1
}

console.log(retPages(len, divider))