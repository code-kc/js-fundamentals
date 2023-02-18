let temp = 34

if (temp >= 60 && temp <= 90) {
    console.log('Its super nice outside')
} else if (temp <= 32 || temp >= 110) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

// challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Both are Vegan. Offering only vegan dishes.')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some vegan option and others also')
} else {
    console.log('Just checkout the menu')
}