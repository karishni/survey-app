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
  input: {
    '& .MuiInputBase-input': {
      width: '20ch',
    }
  },
  buttonMargin: {
    margin: '10px',
  },
}));

function App(){
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
      <Form count={no}/>
    ))}
      <div className="new-btn"><Button onClick={newQuestion} color="secondary" variant="outlined">New Question</Button></div>
      </div>
    </div>
  )
}

function Form(props) {
  //console.log(props);
  const classes = useStyles();
  const [ question,setQuestion ] = useState({});
  const [ ques,setQues ] = useState('');
  const [ questionType,setQuestionType ] = useState('');
  const [ radioOptions, setRadioOptions ] = useState('');
  const [ radioArr, setRadioArr ] = useState([]);
  //const [ innerArr, setInnerArr ] = useState([]);
  const [ checkOptions, setCheckOptions ] = useState('');
  const [ checkArr, setCheckArr ] = useState([]);
  //const [ count, setCount ] = useState(1);
  

  const addQuestion=(event)=>{
    event.preventDefault();
    setQuestion( 
      {
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

  const radioEditor=()=>{
    if(questionType === QuestionTypes[2].value){
      return(
        <div>
          <label>Enter your options:</label><br/>
          <TextField className={classes.input} margin="dense" value={radioOptions} placeholder="Enter option" onChange={event => setRadioOptions(event.target.value)}/><br/>
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
          <TextField className={classes.input} margin="dense" value={checkOptions} placeholder="Enter Option" onChange={event => setCheckOptions(event.target.value)}/>
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


  const liveEdit=(event)=>{
    event.preventDefault();
    setQues(question.question);
    setQuestionType(question.type);
  }

  return(
    <div className="container2">
    <div className="editor">
      <div>
      <form onSubmit={addQuestion} noValidate autoComplete="off" className={classes.root}>
        <label htmlFor={ques}>Enter your question: </label><br/>
        <TextField margin="dense" id={ques} value={ques} placeholder="Enter your Question" onChange={event => setQues(event.target.value)}/><br/>
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
        <Button type="submit" className="btn" color="primary" variant="contained">
          Add Question
        </Button>
      </form>
      </div>
    </div>
    
    <div className="preview">
      <div className="pre-con">
        {/* <h1>PREVIEW YOUR FORM!</h1> */}
   <form className={classes.root} onSubmit={liveEdit}>
   <div className="question" htmlFor={question.question}>{question.number} {question.question}</div>
   <div>{question.type === QuestionTypes[0].value ? <div><TextField margin="dense" placeholder="Your Answer"/><button type="submit">Edit</button></div> : null}</div>
   <div>{question.type === QuestionTypes[1].value ? <div><TextField variant="outlined" multiline rows={4} placeholder="Your Answer"/><button type="submit">Edit</button></div> : null}</div>
   <div>{question.type === QuestionTypes[2].value ? <div><RadioButtons options={radioArr}/><button type="submit">Edit</button></div> : null}</div>
   <div>{question.type === QuestionTypes[3].value ? <div><CheckBox options={checkArr}/><button type="submit">Edit</button></div> : null}</div>
   </form>
      </div>
    </div>
    </div>
  );
}
export default App;

// {/* {question.map((item)=>( */}
//   <form className={classes.root} htmlFor={item.number}>
//   <div className="question" value={item.question} key={item.number} id={item.number}>{item.number}) {item.question}</div>
//   <div>{item.type === QuestionTypes[0].value ? <TextField margin="dense" placeholder="Your Answer"/> : null}</div>
//   <div>{item.type === QuestionTypes[1].value ? <TextField variant="outlined" multiline rows={4} placeholder="Your Answer"/> : null}</div>
//   <div>{item.type === QuestionTypes[2].value ? <RadioButtons options={radioArr}/> : null}</div>
//   <div>{item.type === QuestionTypes[3].value ? <CheckBox options={checkArr}/> : null}</div>
//   <button name={item.question}>Edit</button>
//   </form>
// {/* ))} */}
{/* <div className="new-btn"><Button onClick={newQuestion} color="secondary" variant="outlined">New Question</Button></div> */}
// const newQuestion=()=>{
//   setQues('');
//   setQuestionType('');
// }