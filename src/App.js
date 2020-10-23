import React,{ useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import QuestionTypes from './components/questionTypes';
import RadioButtons from './components/radioButtons';
import CheckBox from './components/checkBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '40ch',
    },
  },
  wid: {
    width: '20ch',
  },
  buttonMargin: {
    margin: '10px',
  },
}));

function App() {
  const classes = useStyles();
  const [ question,setQuestion ] = useState([]);
  const [ ques,setQues ] = useState('');
  const [ questionType,setQuestionType ] = useState('');
  const [ radioOptions, setRadioOptions ] = useState('');
  const [ radioArr, setRadioArr ] = useState([]);
  const [ innerArr, setInnerArr ] = useState([]);
  const [ checkOptions, setCheckOptions ] = useState('');
  const [ checkArr, setCheckArr ] = useState([]);
  

  const addQuestion=(event)=>{
    event.preventDefault();
    //setQuestion(question.concat(ques));
    setQuestion([...question, 
      {
        question: ques,
        type: questionType
      }])
    console.log(question);
    setRadioArr([...radioArr, innerArr]);
  }

  const handleRadioOptions=(event)=>{
    event.preventDefault();
    setInnerArr([...innerArr, radioOptions]);
    setRadioOptions('');
    //setRadioArr([...radioArr, innerArr ]);
    //console.log(radioArr);
    
  }

  const handleCheckOptions=(event)=>{
    event.preventDefault();
    setCheckArr([...checkArr, checkOptions]);
    setCheckOptions('');
  }

  const radioEditor=()=>{
    if(questionType === QuestionTypes[2].value){
      return(
        <div>
          <label>Enter your options:</label><br/>
          <TextField className={classes.wid} margin="dense" value={radioOptions} placeholder="Enter option" onChange={event => setRadioOptions(event.target.value)}/>
          <Button onClick={handleRadioOptions} color="primary" variant="outlined" className={classes.buttonMargin}>
            Add Option
          </Button>
        </div>
      )
    }
    else{
      return(null);
    }
  }

  const checkBoxEditor=()=>{
    if(questionType === QuestionTypes[3].value){
      return(
        <div>
          <label>Enter options: </label><br/>
          <TextField className={classes.wid} margin="dense" value={checkOptions} placeholder="Enter Option" onChange={event => setCheckOptions(event.target.value)}/>
          <Button onClick={handleCheckOptions} color="primary" variant="outlined" className={classes.buttonMargin}>
            Add Option
          </Button>
        </div>
      )
    }
    else{
      return(null);
    }
  }

  const newQuestion=()=>{
    setQues('');
    setQuestionType('');
    setInnerArr([]);
    //setCheckArr([]);
  }

  return(
    <div className="container">
    <div className="editor">
      <div className="new-btn"><Button onClick={newQuestion} color="secondary" variant="outlined">New Question</Button></div>
      <div>
      <form onSubmit={addQuestion} noValidate autoComplete="off" className={classes.root}>
        <label>Enter your question: </label><br/>
        <TextField margin="dense" value={ques} placeholder="Enter your Question" onChange={event => setQues(event.target.value)}/><br/>
        <label>Select the type of question you want: </label><br/>
        <TextField
          id="."
          select
          label="Select"
          value={questionType}
          margin="dense"
          helperText="Please select Question Type"
          variant="outlined"
          onChange={event => setQuestionType(event.target.value)}
        >
        {QuestionTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>))}
        </TextField><br/>
        {radioEditor()}
        {checkBoxEditor()}
        <Button type="submit" color="primary" variant="contained">
          Add Question
        </Button>
      </form>
      </div>
    </div>
    
    <div className="preview">
        {question.map((item)=>(
          <div className={classes.root}>
          <div key={item.question}>{item.question}</div>
          <div>{item.type === QuestionTypes[0].value ? <TextField margin="dense" placeholder="Your Answer"/> : null}</div>
          <div>{item.type === QuestionTypes[1].value ? <TextField variant="outlined" multiline rows={4} placeholder="Your Answer"/> : null}</div>
          <div>{item.type === QuestionTypes[2].value ? <RadioButtons options={radioArr}/> : null}</div>
          <div>{item.type === QuestionTypes[3].value ? <CheckBox options={checkArr}/> : null}</div>
          </div>
        ))}
        
    </div>
    </div>
  );
}
export default App;
