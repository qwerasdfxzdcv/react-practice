import './App.css';
import { useState } from 'react';
//component .jsx
function App() {
  
  const [num, setNum] = useState("0")
  const [result, setResult] = useState("0")
  const [logs,setLogs] = useState([0])
  const [logs_middle,setLogs_middle] = useState([0])
  const numHandler = (e) =>{ setNum(parseFloat(e.target.value))}
  const CalcHandler = (e) =>{
    if(e.target.innerHTML === '+'){
      setResult(parseFloat(result + num))
      setLogs([...logs,parseFloat(result + num)])
      setLogs_middle([...logs_middle," + " + num])
    }
    if(e.target.innerHTML === '-'){
      setResult(parseFloat(result - num))
      setLogs([...logs,parseFloat(result - num)])
      setLogs_middle([...logs_middle," - " + num])
    }
    if(e.target.innerHTML === 'x'){
      setResult(parseFloat(result * num))
      setLogs([...logs,parseFloat(result * num)])
      setLogs_middle([...logs_middle," * " + num])
    }
    if(e.target.innerHTML === '/'){
      setResult(parseFloat(result / num))
      setLogs([...logs,parseFloat(result / num)])
      setLogs_middle([...logs_middle," / " + num])
    }
  }

  return (
      <div className="App">
        <div>
        <input type='number' onChange={numHandler}></input>
      </div>
      <div>
        <button onClick={CalcHandler} >+</button>
        <button onClick={CalcHandler} >-</button>
        <button onClick={CalcHandler} >x</button>
        <button onClick={CalcHandler} >/</button>
      </div>
      <div>
        {logs.map((result,i)=>i===0 ? <p key = {i}>초기값 = {result}</p>:
        <p key={i}>{logs[i-1]}  {logs_middle[i]} = {logs[i]}</p>)
        }
        </div>
        
      </div>
  );
}

export default App;