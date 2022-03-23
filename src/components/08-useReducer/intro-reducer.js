const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState , action)=> {

if (action?.type === 'agregar') {
    return [...state, action.paylod];
}


    return state;
}
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}


const action = {
    type: 'agregar',    // le mandamos el tipo de acción a realizar 
    payload: newTodo     // con que se debe de  realizar la acción 
}

todos = todoReducer( todos, action);
console.log(todos);