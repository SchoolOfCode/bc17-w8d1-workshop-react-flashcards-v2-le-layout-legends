// Suggested code may be subject to a license. Learn more: ~LicenseLog:239857531.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:361132222.
import React, { useState } from 'react';


export default function Forms(props) {
    const [questionBox, setQuestionBox] = useState('');
    const [answerBox, setAnswerBox] = useState('');

    function handleQuestionBoxInput(event) { 
        setQuestionBox(event.target.value)

    }

    function handleAnswerBoxInput(event) { 
        setAnswerBox(event.target.value)
    }
  function handleClick() {

  }


    return (<form> 
        <label>Question
        <input
          type="text"
          value={questionBox}
          onChange={handleQuestionBoxInput}
        /></label>
        <label>Answer
        <input
          type="text"
          value={answerBox}
          onChange={handleAnswerBoxInput}
        /></label>
        <button onClick={handleClick} type="submit">Add
        </button>
    </form>
  
  
    )
    <p>Question {questionBox}</p>
    <p>Answer {answerBox}</p>
    
}
    

