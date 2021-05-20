import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
    return (
        <div className={`task ${props.reminder ? "reminder": ""}`} onDoubleClick={() => props.onToggle(props.id)}>
            <h3 key={props.id}>{props.taskName} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => props.onClick(props.id)}/></h3>
            <p>{props.day}</p>
            <p>{props.reminder}</p>
        </div>
    )
}

export default Task;
