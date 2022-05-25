import React from 'react';
import TodoItem from './TodoItem';

const TaskCompleted = ({completedlist, onDelete}) => {
    return (
        <div>
          { completedlist.length=== 0?'No Tasks completed':
            <div>{completedlist.map((props)=>{
                return<TodoItem key={props.id} {...props} onDelete={onDelete}/>
            })}</div>}
            
        </div>
    );
};

export default TaskCompleted;