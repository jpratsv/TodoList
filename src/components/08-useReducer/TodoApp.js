import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm'

const initialState = [{                    // Este es el punto inicial de la aplicacion 
    id:new Date().getTime(),
    desc: 'Aprender React',
    donde: false
}];


export const TodoApp = () => {
  
    const [todos, dispatch ] = useReducer(todoReducer, initialState);

    const [{description}, handleInputChange] = useForm({
        description: '',



    });

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const newTodo = {
            id:new Date().getTime(),
            desc: 'Nueva Tarea',
            donde: false           
        }

        const action = {
            type: 'add',
            paylod: newTodo
        }
        dispatch(action);
    }
  
    return (
    <div>
        <h1>TodoApp ( {todos.length}) </h1>
        <hr />
        
        <div className='row'>

            <div  className='col-7'>

                <ul className="list-group list-group-flush">
                    {
                        todos.map ((todo, i) => (
                            <li
                                key={todo.id}
                                className="list-group-item"
                            >  
                                <p className="text-center "> { i + 1}. { todo.desc }</p>
                                <botton
                                    className="btn btn-danger"
                                >
                                    Borrar
                                </botton>
                            </li>

                        ))
                    }
                </ul>



            </div>

            <div className='col-5'>


                <h4>Agregar TODO</h4>
                <hr />
                <form onSubmit={handleSubmit}> 

                    <input
                        type="text"
                        name="descripcion"
                        className='form-control'
                        placeholder='Entre nuevo elemento ...'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-1 btn-block'
                    >
                        Agregar

                    </button>

                </form>


            </div>







        </div>


    </div>
  )
}
