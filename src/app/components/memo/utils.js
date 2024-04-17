export function createTodos() {
    const todos = [];
    for (let index = 1; index < 50; index++) {
        todos.push({
            id: index,
            text: `todo numéro ${index}`,
            completed: Math.random() > 0.5
        });
    }
    return todos;
};


export function filterTodos(todos, filtre){

    return todos.filter(todo => {
        if (filtre === 'all') {
            return true;
        } else if (filtre === 'en cours') {
            return !todo.completed;
        } else if (filtre === 'terminé') {
            return todo.completed;
        }
    });
};
