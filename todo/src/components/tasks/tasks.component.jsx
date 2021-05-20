import React from 'react';
import Task from '../task/task.component';

const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map((task) => (<Task key={task.id} taskName={task.text} day={task.day} onClick={props.onClick} id={task.id} onToggle={props.onToggle} reminder={task.reminder}/>))}
        </div>
    )
}

export default Tasks;


