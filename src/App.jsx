import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [classAlert, setClassAlert] = useState('alert')
  const [result, setResult] = useState("");
  const handleClick=(x)=>{
    setClassAlert('alert')
    setResult((prevResult)=>prevResult+=x)
  }
  const resetDisplay=()=>{
    setResult("")
    setClassAlert('alert')
  }
  const calculate=()=>{
    try {
      const x = result==="" ? "0" : result.replace(/×/g, '*').replace(/÷/g, '/');
      setResult(evaluate(x));
      setClassAlert('alert')
    } catch (error) {
      if (error instanceof SyntaxError) {
        setClassAlert('alert show-alert')
        console.log("Syntax error: " + error.message);
      } else if (error instanceof TypeError && error.message.includes("is not a function")) {
        setResult('')
      }
    }
  }
  return (
    <>
      <div className={classAlert}><p>ตัวดำเนินการไม่ถูกต้อง</p></div>
      <Container>
      <Display>
        <h1>{result==="" ? "0" : result}</h1>
      </Display>
      <div className='box-calculate'>
        <div className="item itemPlus" onClick={()=>{handleClick("+")}}>+</div>
        <div className="item itemDel" onClick={()=>{handleClick("-")}}>-</div>
        <div className="item itemMul" onClick={()=>{handleClick("×")}}>×</div>
        <div className="item itemDiv" onClick={()=>{handleClick("÷")}}>÷</div>
        <div className="item item7" onClick={()=>{handleClick("7")}}>7</div>
        <div className="item item8" onClick={()=>{handleClick("8")}}>8</div>
        <div className="item item9" onClick={()=>{handleClick("9")}}>9</div>
        <div className="item item4" onClick={()=>{handleClick("4")}}>4</div>
        <div className="item item5" onClick={()=>{handleClick("5")}}>5</div>
        <div className="item item6" onClick={()=>{handleClick("6")}}>6</div>
        <div className="item item1" onClick={()=>{handleClick("1")}}>1</div>
        <div className="item item2" onClick={()=>{handleClick("2")}}>2</div>
        <div className="item item2" onClick={()=>{handleClick("3")}}>3</div>
        <div className="item item." onClick={()=>{handleClick(".")}}>.</div>
        <div className="item item0" onClick={()=>{handleClick("0")}}>0</div>
        <div className="item itemC" onClick={()=>{resetDisplay()}}>C</div>
        <div className="item itemSum" onClick={()=>{calculate()}}>=</div>
      </div>
    </Container>
    </>    
  );
}


const Container = styled.div`
  width: 40%;
  margin: 5em auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
`
const Display = styled.div`
  width: 100%;
  background-color: #000000 ;
  color: #fff;
  text-align: right;
  padding: 5px 10px;
`

export default App;
