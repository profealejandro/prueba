import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {v4 as uuid} from "uuid";
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

    const tareaRef = useRef();

    const agregarTarea = () =>{
        //alert("Agregando tarea...");
        const tarea = tareaRef.current.value;
        const id = uuid();
        //alert(id);

        if(tarea === '') return;

        setTodos((prevTodos) =>{
            const nuevaTarea = {
                id:uuid(),
                tarea: tarea
            }
            //3 PUNTITOS TOMA EL ARREGLO Y LO DESCOMPONE
            //CON EL RETURN ESTOY TOMANDO EL ARREGLO ANTIGUO + UNA NUEVA TAREA
            //Y FORMO UN NUEVO ARREGLO DE TAREAS

            tareaRef.current.value = '';
            return [...prevTodos, nuevaTarea];
        });
    }



    return (
        <Fragment>
            <h1>Listado de Tareas</h1>
            <div className="input-group mt-4 mb-4">
                <input ref={tareaRef} placeholder="Ingrese una tarea" className="form-control" type="text"></input>
                <button onClick={agregarTarea} className="btn btn-success">+</button>
            </div>
            <ul className="list-group">
               {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
               ))}
            </ul>
        </Fragment>
    );
}