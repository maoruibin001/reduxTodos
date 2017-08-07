/**
 * Created by lenovo on 2017/8/5.
 */
const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {
                id: action.id,
                completed: false,
                text: action.text
            }]
        case "TOGGLE_TODO":
            return (state.map(todo => {
                return todo.id === action.id ? Object.assign({}, todo, {
                     completed: !todo.completed
                 }) : todo;
            }));
        default:
            return state;
    }
}

export default todos;