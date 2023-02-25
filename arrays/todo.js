let todos = [{
    text: 'log Jira efforts',
    completed: true
}, {
    text: 'walk in the park',
    completed: true
}, {
    text: 'watch movie',
    completed: true
}, {
    text: 'todo something',
    completed: false
}, {
    text: 'learn js',
    completed: false
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1)
        todos.splice(index, 1)
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed == b.completed) {
            return 0
        } else if (!a.completed) {
            return -1
        } else {
            return 1
        }
    })
}

sortTodos(todos)
console.log(todos)
//console.log(getThingsTodo(todos))
// deleteTodo(todos, 'learn js')
// console.log(todos)