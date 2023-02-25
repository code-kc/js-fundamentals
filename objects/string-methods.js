let name = 'Avinash KC'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// challenge area
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('ghd656'))
console.log(isValidPassword('ghd656password'))
console.log(isValidPassword('ghd656assword'))
