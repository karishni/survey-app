import React,{ useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import QuestionTypes from './components/questionTypes';
import RadioButtons from './components/radioButtons';
import CheckBox from './components/checkBox';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       width: '40ch',
//     },
//   },
//   input: {
//     '& .MuiInputBase-input': {
//       width: '20ch',
//     }
//   },
//   buttonMargin: {
//     margin: '10px',
//   },
// }));

export default function App(){
  const [ count, setCount ] = useState(2);
  const [ number, setNumber ] = useState([1]);
  const newQuestion=(event)=>{
    event.preventDefault();
    setCount(count + 1);
    setNumber([...number, count]);
  }
  
  return(
    <div className="container">
      <div className="container2">
        <div className="create"><h1>CREATE YOUR FORM!</h1></div>
        <div className="prev"><h1>PREVIEW YOUR FORM!</h1></div>
      </div>
      <div>
       {number.map((no)=>(
      <Form key={no} count={no}/>
    ))}
      <div className="new-btn"><Button onClick={newQuestion} color="secondary" variant="outlined">New Question</Button></div>
      </div>
    </div>
  )
}

function Form(props) {

  const [ question,setQuestion ] = useState({});
  const [ ques,setQues ] = useState('');
  const [ questionType,setQuestionType ] = useState('');
  const [ radioOptions, setRadioOptions ] = useState('');
  const [ radioArr, setRadioArr ] = useState([]);
  const [ checkOptions, setCheckOptions ] = useState('');
  const [ checkArr, setCheckArr ] = useState([]);
  const [ req, setReq ] = useState({
    checkedA: false,
  });

  const addQuestion=(event)=>{
    event.preventDefault();
    setQuestion( 
      {
        brac: ')',
        number: props.count,
        question: ques,
        type: questionType
      })
  }

  const handleRadioOptions=(event)=>{
    event.preventDefault();
    setRadioArr([...radioArr, radioOptions]);
    setRadioOptions('');
  }

  const handleCheckOptions=(event)=>{
    event.preventDefault();
    setCheckArr([...checkArr, checkOptions]);
    setCheckOptions('');
  }

  const removeRadioOpt=(event)=>{
    console.log(event.target.name);
    for(var i = 0; i<=radioArr.length; i++){
      if(radioArr[i] === event.target.name){
        radioArr.splice(i, 1);
      }
    }
  }

  const removeCheckOpt=(event)=>{
    console.log(event.target.name);
    for(var i = 0; i<=checkArr.length; i++){
      if(checkArr[i] === event.target.name){
        checkArr.splice(i, 1);
    }
  }
}
  const radioEditor=()=>{
    if(questionType === QuestionTypes[2].value){
      return(
        <div>
        <div className="container2">
          <label className="enter-ques">Enter options: </label>
          <TextField margin="dense" value={radioOptions} placeholder="Enter option" onChange={event => setRadioOptions(event.target.value)}/>
          <IconButton size="small" onClick={handleRadioOptions} color="primary" variant="outlined">
            <AddIcon/>
          </IconButton>
        </div>
        <div className="options">
          {radioArr.map((opt)=>(
            <span key={opt} className="single-opt">
              {opt}
              <button className="remove-btn" name={opt} onClick={removeRadioOpt}>
                x
                </button>
            </span>
          ))}
        </div>
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
        <div className="container2">
          <label className="enter-ques">Enter options: </label>
          <TextField margin="dense" value={checkOptions} placeholder="Enter Option" onChange={event => setCheckOptions(event.target.value)}/>
          <IconButton size="small" onClick={handleCheckOptions} color="primary" variant="outlined">
            <AddIcon/>
          </IconButton>
        </div>
        <div className="options">
          {checkArr.map((opt)=>(
            <span key={opt} className="single-opt">
              {opt}
              <button onClick={removeCheckOpt} className="remove-btn" name={opt}>
                x
              </button>
            </span>
          ))}
        </div>
        </div>
      )
    }
    else{
      return(null);
    }
  }

  const handleRequired=(event)=>{
    setReq({...req, [event.target.name]: event.target.checked });
  }


  const liveEdit=(event)=>{
    event.preventDefault();
    setQues(question.question);
    setQuestionType(question.type);
  }

  return(
    <div className="container2">
    <div className="editor">
      <div>
      <form onSubmit={addQuestion} noValidate autoComplete="off">
        <div className="contain2">
        <label className="enter-ques" htmlFor={ques}>Enter your question: </label>
        <TextField margin="dense" id={ques} value={ques} placeholder="Enter your Question" onChange={event => setQues(event.target.value)}/><br/>
        </div>
        <div className="container2">
        <label className="enter-ques">Select question type: </label>
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
        </div>
        {radioEditor()}
        {checkBoxEditor()}
        <FormControlLabel
        control={<Switch checked={req.checkedA} onChange={handleRequired} name="checkedA" />}
        label="Required"
      />
        <Button type="submit" className="add-btn" color="primary" variant="contained">
          Add Question
        </Button>
      </form>
      </div>
    </div>
    
    <div className="preview">
      <div className="pre-con">
   <form onSubmit={liveEdit}>
   <div className="question" htmlFor={question.question}>{question.number}{question.brac} {question.question}
        {req.checkedA ? <span className="req">*</span> : null}</div>
   <div>{question.type === QuestionTypes[0].value ? <div><TextField fullWidth variant="outlined" margin="dense" placeholder="Your Answer"/></div> : null}</div>
   <div>{question.type === QuestionTypes[1].value ? <div><TextField fullWidth variant="outlined" multiline rows={4} placeholder="Your Answer"/></div> : null}</div>
   <div>{question.type === QuestionTypes[2].value ? <div><RadioButtons options={radioArr}/></div> : null}</div>
   <div>{question.type === QuestionTypes[3].value ? <div><CheckBox options={checkArr}/></div> : null}</div>
   </form>
      </div>
    </div>
    </div>
  );
}
