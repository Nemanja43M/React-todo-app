import style from "./TodoList.module.css";

import ModalEdit from "./Modal";

function TodoList({ todo, setTodo }) {
  const handlerDelete = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const handlerComplete = (id) => {
    const result = todo.map((item) => {
      if (item.id === id.id) {
        return { ...item, completed: true };
      } else {
        return item;
      }
    });

    setTodo(result);
  };

  return (
    <div>
      {todo.map((item) => (
        <li key={item.id} className={style.list}>
          <div className={style.span}>
            <span>{item.title}</span>
            <span>{item.date}</span>
            <span>{item.description}</span>
            <span>{item.picker}</span>
          </div>

          <div className={style.buttondiv}>
            <button
              className={style.buttoncomplete}
              onClick={() => handlerComplete(item)}
            >
              <i className="fa fa-check-circle" />
            </button>
            <ModalEdit todoObj={item} setTodo={setTodo} todo={todo} />
            <button
              className={style.buttondelete}
              onClick={() => handlerDelete(item)}
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
