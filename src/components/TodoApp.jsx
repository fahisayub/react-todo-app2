import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import style from '../style/TodoApp.module.css'
const TodoApp = () => {
    const [tasklist,setTasklist]=useState([]);
    const[page,setpage]=useState(1);
    const onDelete=(id)=>{
        let newlist=tasklist.filter(list=>list.id!==id);
        setTasklist(newlist);
    
    }

    useEffect(()=>{
        fetch(`http://localhost:3004/todos?_page=${page}&_limit=7`).then((res)=>res.json()).then((data)=>{
            setTasklist(data);
        })
    },[page]);
    let onprev=()=>{
        if(page>1){
            setpage(page-1)
        }
       
    }
    let onnext=()=>{
        let val=Math.ceil(tasklist.length/5);
        if(page<=val){
            setpage(page+1);
        }
      
    }

    
    return (
        <div className={style.todoapp}>
            <TodoInput setTasklist={setTasklist} tasklist={tasklist}/>
            <TodoList tasklist={tasklist} onDelete={onDelete}/>
            <div>{page}<button onClick={onprev}>prev</button><button onClick={onnext}>next</button></div>
        </div>
    );
};

export default TodoApp;