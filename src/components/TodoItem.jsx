import React from "react";

export function TodoItem({todo}){
    const {id, tarea} = todo;

    return (<li className="list-group-item">{tarea}</li>)
}
