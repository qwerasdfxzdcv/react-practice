import './App.css';
import { useState } from 'react';
//component .jsx
function App() {
  const [num, setNum] = useState()
  const [logs,setLogs] = useState([])
  const onChangeNum = (e)=>{
    setNum(e.target.value)
    setLogs([...logs,e.target.value])
  }
  return (
    <div className="App">
      <input type='text' onChange={onChangeNum}></input>
    </div>
  );
}

export default App;