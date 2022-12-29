import style from "./App.module.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className={style.box}>
      <div className={style.wrapper}>
        <h1 className={style.h1}>List of Tasks</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
