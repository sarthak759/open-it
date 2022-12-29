import React, {Component, useState} from 'react';
import Dialouge from './dialouge/Dialouge';
import './App.css';

const App = () => {
  const questions = ['Can I ask you something ?', 'Will you be my valentine ?', 'Would you like to go on a date with me ?', 'Lets go to gym together']
  const [curIdx, setCurIdx] = useState(1);
  const [currentText, setCurrentText] = useState(questions[0]);

  const onClickHandler = () => {
    setCurIdx(curIdx+1);
    console.log(curIdx);
    setCurrentText(questions[curIdx]);
  }

  return (
    <div className='main-div'>
      {/* <p>Hello world!</p> */}
      <Dialouge text={currentText} onClick={onClickHandler} i={curIdx}/>
    </div>
  );
}

export default App;
