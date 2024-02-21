// import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Todoitem from "../todo-item";
function TodoList() {

    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    return (
    <section>
        <button className="btn btn-danger"
        onClick={ () => setTodos([])}
        >Clear Todos
            </button>
        <ul className="list-group">
           
           

            {todos.map(function (todo, index) {
               return <Todoitem todo={todo} index={index} />

            })}
        </ul>
        </section>
    );

}
export default TodoList;