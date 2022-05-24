import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TaskCompleted from './TaskCompleted';
import style from '../style/TodoList.module.css'
const TodoList = ({tasklist,onDelete}) => {
const [completedlist,setCompletedlist]=useState([]);
const[showcompleted, setshowdone]=useState(false);
const onshow=()=>{
    setshowdone(!showcompleted);
}
const onCDelete=(id)=>{
    let newlist=completedlist.filter(list=>list.id!==id);
    setCompletedlist(newlist);

}
    return (
        <div className={style.todolist}>
            {tasklist.map((prop)=>(
                <TodoItem key={prop.id} completedlist={completedlist} setCompleted={setCompletedlist} {...prop} onDelete={onDelete}/>
            ))}
            <button className={style.showbtn} onClick={onshow}>Show Completed Todos</button>
            <div>{showcompleted?<TaskCompleted completedlist={completedlist} onDelete={onCDelete}/>:''}</div>
        </div>
    );
};

export default TodoList;