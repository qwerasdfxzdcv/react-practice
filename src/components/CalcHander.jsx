import { useState } from "react";

const CalcHandler = (e) =>{
  const [result, setResult] = useState(0)
  const [num, setNum] = useState(0)
  const numHandler = (e) =>{
    setNum(parseInt(e.target.value))
  }
  if(e.target.innerHTML === '+') setResult(parseInt(result + num))
  if(e.target.innerHTML === '-') setResult(parseInt(result - num))
  if(e.target.innerHTML === 'x') setResult(parseInt(result * num))
  if(e.target.innerHTML === '/') setResult(parseInt(result / num))
  return <div>{result}</div>
}


export default CalcHandler