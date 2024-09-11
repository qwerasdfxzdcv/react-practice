const Form = (props) =>{
  const propsArr = [props.children];
  return <form style={{border: "1px solid red"
  }}>
    {propsArr}
  </form>
}
export default Form