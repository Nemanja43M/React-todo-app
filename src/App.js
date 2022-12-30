import style from "./App.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const todoObj = {
    id: "",
    title: "",
    date: "",
    description: "",
    picker: "",
    completed: false,
  };

  return (
    <div className={style.box}>
      <div className={style.wrapper}>
        <h1 className={style.h1}>List of Tasks</h1>
        <TodoForm
          todoObj={todoObj}
          mode={"Add"}
          setTodo={setTodo}
          todo={todo}
        />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
