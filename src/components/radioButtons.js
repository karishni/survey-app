import React from 'react';

export default function RadioButtons(props){
    console.log(props);
    return(
        <div>
        {props.options.map((option)=>(
            <div>
                {option.map((item)=>(
            <form>
                <input type="radio"/>
                <label key={item}>{item}</label>
            </form>
            ))}
            </div>
        ))}
        </div>
    )
}