import {
  TextField,
  Button,
  TextareaAutosize,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import style from "./TodoForm.module.css";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [picker, setPicker] = useState("");
  const [todo, setTodo] = useState([]);

  function onHandlerTitle(e) {
    setTitle(e.target.value);
  }
  function onHandlerDate(e) {
    setDate(e.target.value);
  }
  function onHandlerTextArea(e) {
    setArea(e.target.value);
  }
  function onHandlerPicker(e) {
    setPicker(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const todoObject = {
      id: uuidv4(),
      title: title,
      date: date,
      description: area,
      picker: picker,
    };
    console.log(todoObject);
    setTodo((prevTodos) => {
      return [todoObject, ...prevTodos];
    });
    setTitle("");
    setPicker("");
    setDate("");
    setArea("");
  }
  console.log(todo);
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={onHandlerTitle}
          type="text"
          label="Title"
          className={style.input}
          id="outlined-basic"
        />
        <TextField
          value={date}
          onChange={onHandlerDate}
          type="date"
          className={style.input}
          id="outlined-basic"
        />
        <TextareaAutosize
          maxRows={4}
          value={area}
          onChange={onHandlerTextArea}
          className={style.input}
          placeholder="TODO..."
        />
        <FormControl>
          <InputLabel>Priority</InputLabel>
          <Select
            className={style.input}
            onChange={onHandlerPicker}
            value={picker}
          >
            <MenuItem value="low">low</MenuItem>
            <MenuItem value="medium">medium</MenuItem>
            <MenuItem value="high">high</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>

      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}
export default TodoForm;
