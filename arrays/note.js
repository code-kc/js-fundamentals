const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Italy'
}, {
    title: 'Habbits to work on',
    body: 'Walk daily. Eat quality food'
}, {
    title: 'Office Modification',
    body: 'Get new chair'
}]

const sortedNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() == noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'to'))

sortedNotes(notes)
console.log(notes)

// const note = findNote(notes, 'office modification')
// console.log(note)