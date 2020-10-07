import React from 'react';

function RadioButtons(){
    return(
        <div>
            <p>Question</p>
            <input name="1" id="option1" type="radio"/>
            <label htmlfor="option1">option 1</label><br/>
            <input name="1" id="option2" type="radio"/>
            <label htmlfor="option2">option 2</label><br/>
            <input name="1" id="option3" type="radio"/>
            <label htmlfor="option3">option 3</label><br/>
            <input name="1" id="option4" type="radio"/>
            <label htmlfor="option4">option 4</label><br/>
        </div>
    )
}

export default RadioButtons;