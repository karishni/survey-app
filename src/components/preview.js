import React,{ useState } from 'react';
import TextInput from './textInput';
import RadioButtons from './radioButtons';
import CheckBox from './checkBox';


function Preview(props){
  //console.log(props);
  const text = "textInput";
  const radio = "radioButton";
  const check = "checkBox";

    const [ question,setQuestion  ] = useState('');

    
    if(props.questionType === text){
        const handleTextInput=(event)=>{
            event.preventDefault();
            setQuestion(event.target[0].value);
            console.log(question);
            return(
                <TextInput question={question}/>
            )
        }
      return(
        <form onSubmit={handleTextInput}>
         <label>Enter question</label>
         <input type="text" />
         <input type="submit" value="add question"/>
        </form>
      )
    }
    else if(props.questionType === radio){
      return(
        <RadioButtons/>
      )
    }
    else if(props.questionType === check){
      return(
        <CheckBox/>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }

export default Preview;