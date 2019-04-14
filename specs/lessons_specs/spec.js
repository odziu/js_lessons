async function readFile() {
    return 'text'
}
console.log(readFile())


async function readFile1() {
    return 22
}
console.log(readFile2())


function readFile2() {
    return 22
}
console.log(readFile2())


async function readFile3() {
    throw new Error('Something wrong!')
}
console.log(readFile3())