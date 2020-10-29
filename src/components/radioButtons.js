import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    noMargin: {
      margin: '0px',
    },
  }));


export default function RadioButtons(props){
    const classes = useStyles();
    return(
        <div>
        {props.options.map((option)=>(
            <div>
              <RadioGroup>
                <FormControlLabel className={classes.noMargin} value="end" control={<Radio color="primary" />} key={option} label={option} />
            </RadioGroup>
            </div>
        ))}
        </div>
    )
}
{/* <RadioGroup>
                <FormControlLabel className={classes.noMargin} value="end" control={<Radio color="primary" />} key={option} label={option} />
            </RadioGroup> */}
            // <input type="radio"/>
            // <label>{option}</label>