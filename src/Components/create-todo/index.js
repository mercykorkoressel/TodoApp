
import styles from "./index.module.css"
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo(){
    const [todos, setTodos] = useLocalStorage("TODOKEY",[]);


    const [ todo,settodo] = useState ("")

   


        // function saveTodo(){
           
        //     // Set all todos in local storage
          
        //     setTodos([...todos,todo]);
        // }
    return(
        // <p>Create Todo</p>
        //allowing the textfield to accept values
        <section className={styles.createTodosection}>
            <input
             onChange= {event=> settodo(event.target.value)}
             className={styles.createTodoinput1} 
              placeholder ="Start typing..."/>

 
            <button 
            onClick={() => setTodos([...todos,todo])} 
            
            className={styles.createTodobtn}
            >Create </button>
        </section>
    );
}

export default CreateTodo;