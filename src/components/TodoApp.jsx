import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import style from "../style/TodoApp.module.css";
import axios from "axios";
const TodoApp = () => {
  const [tasklist, setTasklist] = useState([]);
  const [listcount, setlistCount] = useState(0);
  const [page, setpage] = useState(1);
  const onDelete = (id) => {
    let newlist = tasklist.filter((list) => list.id !== id);
    setTasklist(newlist);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3004/todos?_page=${page}&_limit=7`)
      .then((res) => {
        console.log(res);
        setTasklist(res.data);
        setlistCount(Number(res.headers["x-total-count"]));
      });
  }, [page]);
  let onprev = () => {
    setpage(page - 1);
  };
  let onnext = () => {
    setpage(page + 1);
  };

  return (
    <div className={style.todoapp}>
      <TodoInput setTasklist={setTasklist} tasklist={tasklist} />
      <TodoList tasklist={tasklist} onDelete={onDelete} />
      <div>
        <button disabled={page <= 1} onClick={onprev}>{`<`}</button> Page:{page}{" "}
        <button disabled={page * 7 > listcount} onClick={onnext}>{`>`}</button>
      </div>
    </div>
  );
};

export default TodoApp;
