import React from 'react';
import './App.css';
import TextInput from './components/textInput';
import RadioButtons from './components/radioButtons';
import CheckBox from './components/checkBox';

function App() {
  
  return(
    <div>
      <label htmlFor="questions">Choose a question type:</label>
      <select name="questions" id="questions">
        <option value="textInput">Text Input</option>
        <option value="radioButton">Radio Buttons</option>
        <option value="checkBox">Check boxes</option>
      </select>
    </div>
  );
}

export default App;
