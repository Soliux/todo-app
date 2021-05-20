import React from 'react';
import Button from '../button/button.component';

const Header = (props) => {
    return (
        <header className="header">
            <h1>
                Task Tracker
            </h1>
            <Button bgcolor={props.showAddTask ? 'red' : 'green'} text={props.showAddTask ? 'Close' : 'Add'} onClick={props.onAdd}/>
        </header>
    )
}

export default Header;
