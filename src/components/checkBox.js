import React from 'react';

function CheckBox(){
    return(
        <div>
            <p>Question</p>
            <input type="checkbox" id="option1" name="option1"/>
            <label htmlFor="option1">option 1</label><br/>
            <input type="checkbox" id="optiob2" name="option2"/>
            <label htmlFor="option2">option 2</label><br/>
            <input type="checkbox" id="option3" name="option3"/>
            <label htmlFor="option3">option 3</label><br/>
            <input type="checkbox" id="option4" name="option4"/>
            <label htmlFor="option4">option 4</label><br/>
        </div>
    )
}

export default CheckBox;