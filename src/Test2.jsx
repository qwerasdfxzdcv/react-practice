import { useState } from "react"

const Test2 = () =>{
  const [state, setState] = useState({log: []})
  const textChanger = (e) => {
    const { value } = e.target;
    setState({...state,log:[...state.log, value]})
  }
  return <div>
    <input name="text" onChange={textChanger} value={state.value}/>
    {state.log.map((value)=> <div> {value}</div>)}
  </div>
  
}
export default Test2