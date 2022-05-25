import React, { useState } from "react";
import style from "../style/TodoInput.module.css";
//import {v4 as uuidv4} from 'uuid'

const TodoInput = ({ setTasklist,tasklist }) => {
  const [query, setQuery] = useState("");

  let handleQuery = (e) => {
    setQuery(e.target.value);
  };
let savetask=()=>{
  fetch('http://localhost:3004/todos',{
    method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
      isComplete:false,
          text:query,
          important:false,
    }),
  }).then((result)=>result.json()).then((data)=>{
    setTasklist([...tasklist,data]);
    setQuery('');
  })
}
//   let savetaskhandler=()=>{
    
//     let  data={
//         id:uuidv4(),
//          isComplete:false,
//           text:query,
//           important:false,
//       }
     

// setTasklist([...tasklist,data]);
// setQuery('');
//   }
  return (
    <div className={style.inputbox}>
      <input
        type="text"
        value={query}
        onChange={handleQuery}
        placeholder="Type Something..."
      />
      <button onClick={savetask}>+</button>
    </div>
  );
};

export default TodoInput;
