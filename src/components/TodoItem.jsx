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
//    let edittask=()=>{
//     fetch(`http://localhost:3004/todos/id==${props.id}`,{
//       method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({
//         isComplete:false,
//             text:query,
//             important:false,
//       }),
//     }).then((result)=>result.json()).then((data)=>{
//       setTasklist([...tasklist,data]);
//       setQuery('');
//     })
//   }

    return (
        <div className={style.task}  style={ischecked?{backgroundColor:'rgba(142, 233, 142, 0.51)'}:{}}>
            <div><input type="checkbox"  checked={ischecked} onChange={handlecheckbox} />
            <div className={ischecked?style.content:''}>{props.id}. {props.text}</div></div>
            
            <button>edit</button>
            <button className={style.deletebtn} onClick={()=>{props.onDelete(props.id)}}>x</button>
        </div>
    );
};

export default TodoItem;