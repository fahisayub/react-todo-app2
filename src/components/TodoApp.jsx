import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import style from '../style/TodoApp.module.css'
const TodoApp = () => {
    const [tasklist,setTasklist]=useState([]);
    const onDelete=(id)=>{
        let newlist=tasklist.filter(list=>list.id!==id);
        setTasklist(newlist);
    
    }
    return (
        <div className={style.todoapp}>
            <TodoInput setTasklist={setTasklist} tasklist={tasklist}/>
            <TodoList tasklist={tasklist} onDelete={onDelete}/>
            
        </div>
    );
};

export default TodoApp;