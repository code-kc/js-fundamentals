let add = function (a, b, c) {
    return a + b + c
}

let result = add(1, 2, 4)
console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name:' + name + ', Score: ' + score
}

let scoreText = getScoreText('Avi', 100)
console.log(scoreText)

scoreText = getScoreText(undefined, 100)
console.log(scoreText)

// Challenge area

let getTip = function (total, tipPercent = 20) {
    let tip = total * (tipPercent / 100)
    return `A ${tipPercent}% tip on $${total} would be $${tip}`
}

console.log(getTip(100, 10))
console.log(getTip(100))

let name = 'Ani'
console.log(`Hello ${name}`)