import style from "./TodoList.module.css";

function TodoList({ todo, setTodo }) {
  const handlerDelete = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todo.map((todo) => (
        <li key={todo.id} className={style.list}>
          <div className={style.span}>
            <span>{todo.title}</span>
            <span>{todo.date}</span>
            <span>{todo.description}</span>
            <span>{todo.picker}</span>
          </div>

          <div className={style.buttondiv}>
            <button className={style.buttoncomplete}>
              <i className="fa fa-check-circle" />
            </button>
            <button className={style.buttonedit}>
              <i className="fa fa-edit" />
            </button>
            <button
              className={style.buttondelete}
              onClick={() => handlerDelete(todo)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default TodoList;
