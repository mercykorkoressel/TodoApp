import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Todoitem from "../todo-item";
function TodoList() {

    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODOKEY", []);

    return (
        <ul className="list-group">

            {todos.map(function (todo, index) {
    <Todoitem todo={todo} index ={index}/>
           
})}
        </ul>
    );

}
export default TodoList;