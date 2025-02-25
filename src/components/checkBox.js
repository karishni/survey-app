import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckBox(props){
    return(
        <div>
        {props.options.map((option)=>(
            <div key={option}>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="primary" name="checkedA"/>} label={option}/>
            </FormGroup>
            </div>
        ))}
        </div>
    )
}
//* <FormGroup>
            //     <FormControlLabel
            //         control={<Checkbox color="primary" name="checkedA" />}
            //         label={option}
            //     />
            // </FormGroup> */
            // <input type="checkbox"/>
            // <label>{option}</label>