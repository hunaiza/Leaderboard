import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Stylesheet from './Components/Stylesheet';
import InlineStyle from './Components/InlineStyle';
import CSSModule from './Components/CSSModule';
import Subscribe from './Components/Subscribe';
import Counter from './Components/Counter';
import Student from './Components/Student';


function App() {
  return (
    <div className="App" style={{background: "Linear-gradient(lightblue, seagreen)"}}>
      <h1 className="LeaderBoardHeading">Leaders Board</h1>
      <Student name="Hunaiza M.Riaz" university="SMIU" scores={347}/>
      <Student name="Suzan" university="NUST" scores={345}/>
      <Student name="Yashub" university="FAST" scores={340}/>
    </div>
  );
}

export default App;
