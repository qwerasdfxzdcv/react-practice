import { useState } from "react";

const Form = ()=>{
  const [state,setState] = useState({name:"",age:0})
  const onSubmitHandler = (e) =>{
    
    
    e.preventDefault();
    
    
    /*const obj={}
    const {target} =e;
    console.log(target[0],target.length)
    for(let i=0;i<target.length;i++){
      if(target[i]&& target[i].type!=="submit")
        obj[target[i].name] = target[i].value
    }
    console.log(obj)*/
  }
  return <form onSubmit={onSubmitHandler}>
    <input name="name" required />
    <br/>
    <input name="age"/> <br/>
    <input type="submit" />
  </form>
  
}

export default Form