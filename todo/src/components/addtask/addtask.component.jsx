import React from 'react';
import { useState } from 'react';

const AddTask = (props) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    function onSubmit(e) {
        e.preventDefault()

        if(!text) {
            alert("No task name given")
            return
        }
        
        props.onAdd({text, day, reminder})
        setText("")
        setDay("")
        setReminder(false)

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add new task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add day and time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;
