import './App.css';
import { useState } from 'react';
import CalcHandler from './components/CalcHander';
//component .jsx
function App() {
  
  const [num, setNum] = useState("0")
  const [result, setResult] = useState("0")
  const [logs,setLogs] = useState([0])
  const numHandler = (e) =>{ setNum(parseFloat(e.target.value))}
  const CalcHandler = (e) =>{
    if(e.target.innerHTML === '+') setResult(parseFloat(result + num))
    if(e.target.innerHTML === '-') setResult(parseFloat(result - num))
    if(e.target.innerHTML === 'x') setResult(parseFloat(result * num))
    if(e.target.innerHTML === '/') setResult(parseFloat(result / num))
  }

  return (
    <div>
      <div className="App">
        <input type='number' onChange={numHandler}></input>
      </div>
      <div>
        <button onClick={CalcHandler} >+</button>
        <button onClick={CalcHandler} >-</button>
        <button onClick={CalcHandler} >x</button>
        <button onClick={CalcHandler} >/</button>
      </div>
      {result}
    </div>
  );
}

export default App;