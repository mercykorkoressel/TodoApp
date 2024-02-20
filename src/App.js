import React from "react";
import Header from "./Components/header";
import CreateTodo from "./Components/create-todo";
import TodoList from "./Components/todo-list";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CreateTodo />
      < TodoList/>
    </React.Fragment>
  );
}

export default App;
