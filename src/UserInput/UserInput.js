import React from 'react';

const UserInput = (props) => {
    const style = {
        padding: "10px",
        border: "1px solid blue"
    }

    // Added two way binding ...
    return <input style={style} type="text" onChange={props.change} value = {props.name} />
}

export default UserInput;