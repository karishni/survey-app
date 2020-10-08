import React,{ useState } from 'react';
import './App.css';
// import TextInput from './components/textInput';
// import RadioButtons from './components/radioButtons';
// import CheckBox from './components/checkBox';
// import Preview from './components/preview';

function App() {
  
  const [ questionType,setQuestionType  ] = useState('');
  const [ showInsertQuestion,setShowInsertQuestion ] = useState(false);
  const text = "textInput";
  const radio = "radioButton";
  const check = "checkBox";

  const handleSubmit=(event)=>{
    event.preventDefault();
    setQuestionType(event.target[0].value);
    console.log(questionType);
    setShowInsertQuestion(true);
  }

  const clearQuestionType=(event)=>{
    event.preventDefault();
    setQuestionType('');
    setShowInsertQuestion(false);
    console.log("clear");
  }


  const insertQuestion=()=>{
   if(questionType === text){
     return(
        <form onSubmit={clearQuestionType}>
          <label>Enter Question</label>
          <input type="text"/>
          <input type="submit" value="Add Question"/>
        </form>
    )
     }
     else if(questionType === radio){
       return(
         <form onSubmit={clearQuestionType}>
           <label>Enter Question</label>
           <input type="text"/><br/>
           <label>Enter option 1</label>
           <input type="text"/><br/>
           <label>Enter option 2</label>
           <input type="text"/><br/>
           <label>Enter option 3</label>
           <input type="text"/><br/>
           <label>Enter option 4</label>
           <input type="text"/><br/>
           <input type="button" value="Add"/>
           <input type="submit" value="Add Question" />
         </form>
       )
     }
     else if(questionType === check){
       return(
         <form onSubmit={clearQuestionType}>
           <label>Enter Question</label>
           <input type="text"/><br/>
           <label>check Enter option 1</label>
           <input type="text"/><br/>
           <label>Enter option 2</label>
           <input type="text"/><br/>
           <label>Enter option 3</label>
           <input type="text"/><br/>
           <label>Enter option 4</label>
           <input type="text"/><br/>
           <input type="submit" value="Add Question" onSubmit={clearQuestionType}/>
         </form>
       )
     }

  }

  const questionTypeForm=()=>{
    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="questions">Choose a question type:</label>
          <select name="questions" id="questions">
            <option value="textInput">Text Input</option>
            <option value="radioButton">Radio Buttons</option>
            <option value="checkBox">Check boxes</option>
          </select>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  return(
      <div>
        <div className="editor">
            {questionTypeForm()}
            {showInsertQuestion && insertQuestion()}
        </div>
        <div className="preview">
        
        </div>
    </div>
  );
}

export default App;
