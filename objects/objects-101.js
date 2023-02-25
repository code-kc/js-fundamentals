let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

let person = {
    name: 'Ani',
    age: 3,
    location: 'Kondadahalli'
}

console.log(`${person.name} is ${person.age} lives in ${person.location}`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} lives in ${person.location}`)