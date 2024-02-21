
import styles from "./index.module.css"
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);


    const [todo, settodo] = useState("")

    const saveTodos = () => {
        // save all todos
        setTodos([...todos, todo]);
        // wipe to dos
        settodo("");

    }





    return (
        <section className={styles.createTodosection}>
            <input
                value={todo}
                onKeyDown={event => event.key == "Enter" && saveTodos()}
                onChange={event => settodo(event.target.value)}
                className={styles.createTodoinput1}
                placeholder="Start typing..." />


            <button
                onClick={() => saveTodos()}

                className={styles.createTodobtn}
            >Create </button>
        </section>
    );
}

export default CreateTodo;