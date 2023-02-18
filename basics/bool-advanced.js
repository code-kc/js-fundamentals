let isAccountLocked = false
let userRole = 'admin'
if (isAccountLocked) {
    console.log('Acount is locked!')
} else if (userRole === 'admin') {
    console.log('Welcome ' + userRole + '!')
} else {
    console.log('Welcome!')
}

// challenge
let temp = 45
if (temp <= 32) {
    console.log('Its freezing outside')
} else if (temp >= 110) {
    console.log('Its too hot outside')
} else {
    console.log('Enjoy outside!')
}