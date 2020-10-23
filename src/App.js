import React,{ useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import QuestionTypes from './components/questionTypes';
import RadioButtons from './components/radioButtons';
//import InsertTextInput,{ TextInputToPreview } from './editor components/insertTextInput';

function App() {
  const [ question,setQuestion ] = useState([]);
  const [ ques,setQues ] = useState('');
  const [ questionType,setQuestionType ] = useState('');
  

  const addQuestion=(event)=>{
    event.preventDefault();
    //setQuestion(question.concat(ques));
    setQuestion([...question, 
      {
        question: ques,
        type: questionType
      }])
    console.log(question);
  }

  return(
    <div>
    <div className="editor">
      <form onSubmit={addQuestion}>
        <TextField variant="outlined" placeholder="Enter your Question" onChange={event => setQues(event.target.value)}/><br/>
        <TextField
          id="."
          select
          label="Select"
          value={questionType}
          margin="normal"
          helperText="Please select Question Type"
          variant="outlined"
          onChange={event => setQuestionType(event.target.value)}
        >
        {QuestionTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>))}
        </TextField><br/>
        <input type="submit" value="add"/>
      </form>
    </div>
    
    <div className="preview">
        {question.map((item)=>(
          <div>
          <div key={item.question}>{item.question}</div>
          <div>{item.type === QuestionTypes[0].value ? <TextField variant="outlined" placeholder="Your Answer"/> : null}</div>
          <div>{item.type === QuestionTypes[1].value ? <TextField variant="outlined" multiline rows={4} placeholder="Your Answer"/> : null}</div>
          <div>{item.type === QuestionTypes[2].value ?  : null}</div>
          </div>
        ))}
        
    </div>
    </div>
  );
}
export default App;
