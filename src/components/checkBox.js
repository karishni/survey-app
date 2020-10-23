import React from 'react';

export default function CheckBox(props){
    return(
        <div>
        {props.options.map((option)=>(
            <form>
                <input type="checkbox"/>
                <label>{option}</label>
            </form>
        ))}
        </div>
    )
}