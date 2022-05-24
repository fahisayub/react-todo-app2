import React, { useState } from 'react';
import style from '../style/TodoItem.module.css'
const TodoItem = (props) => {
    const[ischecked,setChecked]=useState(props.isComplete);
   let handlecheckbox=(e)=>{
       setChecked(e.target.checked);
       if(e.target.checked){
        props.setCompleted([...props.completedlist,{isComplete:e.target.checked,id:props.id,text:props.text,important:props.important}]);
        props.onDelete(props.id)
       }
   }

    return (
        <div className={style.task}  style={ischecked?{backgroundColor:'rgba(142, 233, 142, 0.51)'}:{}}>
            <div><input type="checkbox"  checked={ischecked} onChange={handlecheckbox} />
            <div className={ischecked?style.content:''}>{props.text}</div></div>
            
            
            <button onClick={()=>{props.onDelete(props.id)}}>x</button>
        </div>
    );
};

export default TodoItem;