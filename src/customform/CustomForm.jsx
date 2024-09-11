//import { useState } from "react";
import Form from "../atom/Form";
import Input from "../atom/Input";

const CustomForm = ()=>{
  //const [state,setState] = useState({name:"",age:0})  //state만 맹신하고 많은양의 폼을 받으면 성능저하가 일어날 가능성이 높다
  const onSubmitHandler = (e) =>{
    e.preventDefault(); //성능 보완을 위한 코드

    //아래 코드처럼 작성하면 state로 모든 정보를 관리할 때 보다 성능 저하의 가능성이 낮다.
    const obj={}
    const {target} =e;
    console.log(target[0],target.length)
    for(let i=0;i<target.length;i++){
      if(target[i]&& target[i].type!=="submit")
        obj[target[i].name] = target[i].value
    return obj;
    }
  }
  return <Form onSubmit={onSubmitHandler}>
    <Input name="name" required />
    <br/>
    <Input name="age"/> <br/>
    <Input type="submit" />
  </Form>
}

export default CustomForm