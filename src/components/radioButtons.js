import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function RadioButtons(props){
    return(
        <div>
        {props.options.map((option)=>(
            <div>
                {option.map((item)=>(
            <RadioGroup m={5}>
                <FormControlLabel value="end" control={<Radio color="primary" />} label={item} />
            </RadioGroup>
            ))}
            </div>
        ))}
        </div>
    )
}