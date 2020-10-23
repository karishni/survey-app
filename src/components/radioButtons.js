import React from 'react';

export default function RadioButtons(props){
    console.log(props);
    return(
        <div>
        {props.options.map((option)=>(
            <form>
                <input type="radio"/>
                <label>{option}</label>
            </form>
        ))}
        </div>
    )
}