import { useEffect, useState } from "react"

// useEffect
const  Test = () =>{
  const [timer,setTimer] = useState(new Date().toLocaleString());
  const [refresh,setRefresh] = useState(0);
  //const [loading,setLoading] = useState(true);
  const onRefresh = ()=> setRefresh(refresh+1)
  useEffect(()=>{
    setTimeout(()=>{
      setTimer(new Date().toLocaleString()) //interval보다 Timer를 사용하는것이 성능저하 방지에 도움이 된다
    },1000)
  },[timer])
  /*useEffect(()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),1000)
    setTimer(new Date().toLocaleString())
  },[refresh])
  if(loading) return <h1>.....</h1>*/
  return <div>
    <h1>{timer}</h1>
    <h1>{refresh}</h1>
    <button onClick={onRefresh}>
    refresh
    </button>
  </div>
}
export default Test