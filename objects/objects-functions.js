let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let myBook2 = {
    title: 'Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook).pageCountSummary)
console.log(getSummary(myBook2).summary)

// Challenge area

let getConvertedTemperature = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

console.log(getConvertedTemperature(32))
console.log(getConvertedTemperature(100))
console.log(getConvertedTemperature(60))