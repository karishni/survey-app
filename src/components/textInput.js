import React from 'react';

function TextInput(props){
    console.log(props);
    return(
        <div>
            <label>{props.question}</label>
            <input type="text"/>
        </div>
    );
}

export default TextInput;