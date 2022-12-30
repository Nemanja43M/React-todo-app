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

import { v4 as uuidv4 } from "uuid";

function TodoForm({ todoObj, mode, setTodo, todo, handleClose }) {
  const [title, setTitle] = useState(todoObj.title);
  const [date, setDate] = useState(todoObj.date);
  const [area, setArea] = useState(todoObj.area);
  const [picker, setPicker] = useState(todoObj.picker);

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
      completed: false,
    };
    if (mode === "Add") {
      setTodo((prevTodos) => {
        return [todoObject, ...prevTodos];
      });
    } else {
      setTodo(
        todo.map((item) => {
          if (item.id === todoObj.id) {
            todoObj.title = title;
            todoObj.date = date;
            todoObj.description = area;
            todoObj.picker = picker;
            return todoObj;
          } else {
            return todoObj;
          }
        })
      );
      handleClose();
    }

    setTitle("");
    setPicker("");
    setDate("");
    setArea("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <TextField
            value={title}
            onChange={onHandlerTitle}
            type="text"
            label="Title"
            className={style.input}
            id="outlined-basic"
            sx={{ width: "100%" }}
          />
          <TextField
            value={date}
            onChange={onHandlerDate}
            type="date"
            className={style.input}
            id="outlined-basic"
            sx={{ width: "100%" }}
          />
          <TextareaAutosize
            value={area}
            onChange={onHandlerTextArea}
            className={style.inputArea}
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
        </div>
        <Button
          className={style.button}
          sx={{ left: "40%" }}
          type="submit"
          variant="contained"
        >
          TODO
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
