import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TaskCompleted from './TaskCompleted';
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
        <div>
            {tasklist.map((prop)=>(
                <TodoItem key={prop.id} completedlist={completedlist} setCompleted={setCompletedlist} {...prop} onDelete={onDelete}/>
            ))}
            <button onClick={onshow}>Show Completed Todos</button>
            <div>{showcompleted?<TaskCompleted completedlist={completedlist} onDelete={onCDelete}/>:''}</div>
        </div>
    );
};

export default TodoList;