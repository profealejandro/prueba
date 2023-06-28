import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { TodoItem } from "./TodoItem";

export function TodoList(){

    //INICIALIZAR VARIABLES QUE ESTARÁ VIENDO REACT
    //POR SI SUFREN CAMBIOS
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = MÉTODO QUE VA A UTILIZAR PARA SUFRIR MODIFICACIONES
    //useState = USARÁ UN STATE PARA CAPTURAR LOS ESTADOS,
    //EN ESTE CASO UN ARREGLO
    const [todos, setTodos] = useState([
        {id:1, tarea:'Tarea 1'}, {id:2, tarea:'Tarea 2'},
        {id:3, tarea:'Tarea 3'}, {id:4, tarea:'Tarea 4'}
    ]);





    return (
        <Fragment>
            <h1>Listado de Tareas</h1>
            <ul className="list-group">
               {todos.map((todo) => (
                    <TodoItem todo={todo}></TodoItem>
               ))}
            </ul>
        </Fragment>
    );
}