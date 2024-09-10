import { useState } from "react";

const init = {name: "", age: 0};
const Join = () => {
    const [person, setPerson] = useState({...init});
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");
    const onChangePerson = (e) => {
        const {name, value} = e.target;
        setPerson({...person, [name]: value});
    }
    const onSubmit = () => {
        setPerson({...init})
        setPeople([...people, {...person}])
    }

    const clickSort = (e) => {
        const sortBy = e.target.getAttribute("id");
        const sortedPeople = [...people].sort((a, b) => {
            if (sortBy === "name") return a.name < b.name ? -1 : 1;
            else if (sortBy === "age") return a.age - b.age;
            return 0;
        });
        setPeople(sortedPeople);
    };

    const onModify = (index) =>{
        const updatedPeople = [...people]; // 수정된 사람 목록 받을 변수 선언
        updatedPeople[index] = {...person}; // index에 해당하는 사람을 지금 입력창에 입력돼있는 사람으로 바꿈
        setPeople(updatedPeople); //people 배열을 updatePeople로 갱신
    }

    const onDelete = (index) => {
        const updatedPeople = people.filter((_, i) => i !== index); // 클릭한 버튼의 index와 다른 index를 가진 놈들만 챙김
        setPeople(updatedPeople); //챙긴 놈들로 배열 바꿈
    };

    return <div>
        <input 
            name="name" 
            value={person.name} 
            onChange={onChangePerson}/>
        <input name="age" value={person.age} onChange={onChangePerson}/>
        <button onClick={onSubmit}>등록</button>
        <br/>
        <input onChange={(e)=> setSearch(e.target.value)}/>
        <table border={1}>
            <thead>
                <th id="name"onClick={clickSort}>name</th>
                <th id="age "onClick={clickSort}>age</th>
                <th>modify</th>
                <th>delete</th>
            </thead>
            {people
                .filter(({name})=> name.includes(search))
                .map(({name, age}, index)=> <tr key = {index}><td>{name}</td><td>{age}</td><td><button onClick={()=>onModify(index)}>modify</button></td><td><button onClick={()=>onDelete(index)}>delete</button></td></tr>)}
        </table>
    </div>
}

export default Join;