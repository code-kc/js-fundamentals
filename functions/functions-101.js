// Function

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()

let square = function (num) {
    return num * num
}

let value = square(334)
console.log(value)

// Challenge area

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log('temp1 -> ' + temp1 + ', temp2 ->' + temp2)