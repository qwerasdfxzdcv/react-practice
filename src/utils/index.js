const submitSupportFn = (e) => {
  e.preventDefault();
  console.log(e)
  const {target} = e
  //key와 value를 추출해서 obj 생성
  const obj = {}
  
  console.log(target[0], target.lentth);
  for(let i=0;i<target.length;i++){
    if(target[i]&&target[i].type!=="submit")
      obj[target[i].name] = target[i].value
  }
  console.log(obj);
}

export default submitSupportFn