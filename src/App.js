import React from "react";
import "./styles/styles.css";
import { useState } from "react";
import { evaluate } from 'mathjs';

import Display from "./components/display";
import Buttons from "./components/buttons.jsx";

function App() {

  const [number, setNumber] = useState('');
  const [result, setResult] = useState(0);
  const handleClick = val => {
    setNumber(number + val);
  };
  const calc = () => {
    try{
      setResult(evaluate(number));
    }catch(err){
      setResult('Equal ERROR')
    }
    setNumber('');
  }


  return (
    <div className="content">
      <div id="calculator">
        <Display 
          equal={number}
          result={result}
        />
        <div id="keys">
          <div className="row">
            <Buttons value='1' event={handleClick}/>
            <Buttons value='2' event={handleClick}/>
            <Buttons value='3' event={handleClick}/>
            <Buttons value='+' event={handleClick}/>
          </div>
          <div className="row">
            <Buttons value='4' event={handleClick}/>
            <Buttons value='5' event={handleClick}/>
            <Buttons value='6' event={handleClick}/>
            <Buttons value='-' event={handleClick}/>
          </div>
          <div className="row">
            <Buttons value='7' event={handleClick}/>
            <Buttons value='8' event={handleClick}/>
            <Buttons value='9' event={handleClick}/>
            <Buttons value='*' event={handleClick}/>
          </div>
          <div className="row">
            <Buttons value='=' event={calc}/>
            <Buttons value='0' event={handleClick}/>
            <Buttons value='C' event={() => setNumber(number.slice(0, -1))}/>
            <Buttons value='/' event={handleClick}/>
          </div>
        </div>
      </div>

      <blockquote>Created by <strong>Marc Molins</strong> using <strong>React</strong></blockquote>
    </div>
  );
}

export default App;
