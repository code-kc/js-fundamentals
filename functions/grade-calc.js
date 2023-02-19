// students score, total possible score
// 15/20 -> You got a C (75%)!

let getGrade = function (studentScore, totalPossibleScore) {
    let percentage = (studentScore * 100) / totalPossibleScore
    if (percentage <= 100 && percentage >= 90) {
        return `You got a A (${percentage}%)!`
    } else if (percentage <= 89 && percentage >= 80) {
        return `You got a B (${percentage}%!)`
    } else if (percentage <= 79 && percentage >= 70) {
        return `You got a C (${percentage}%!)`
    } else if (percentage <= 69 && percentage >= 60) {
        return `You got a D (${percentage}%!)`
    } else if (percentage <= 59 && percentage >= 0) {
        return `You got a F (${percentage}%!)`
    } else {
        return `Invalid are out of the world! with ${percentage}`
    }
}

console.log(getGrade(98, 100))
console.log(getGrade(87, 100))
console.log(getGrade(77, 100))
console.log(getGrade(67, 100))
console.log(getGrade(57, 100))
console.log(getGrade(47, 100))
console.log(getGrade(120, 100))
console.log(getGrade(-15, 100))