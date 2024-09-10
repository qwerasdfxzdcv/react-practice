import { useState } from "react";

const init = { name: "", age: 0 };
const Join = () => {
    const [person, setPerson] = useState({ ...init });
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    const onChangePerson = (e) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    const onSubmit = () => {
        setPeople([...people, { ...person }]);
        setPerson({ ...init });
    };

    const onModify = (index) => {
        const updatedPeople = [...people];
        updatedPeople[index] = { ...person }; 
        setPeople(updatedPeople);
    };

    const onDelete = (index) => {
        const updatedPeople = people.filter((_, i) => i !== index);
        setPeople(updatedPeople);
    };

    return (
        <div>
            <input 
                name="name" 
                value={person.name} 
                onChange={onChangePerson}
            />
            <input 
                name="age" 
                value={person.age} 
                onChange={onChangePerson}
            />
            <button onClick={onSubmit}>등록</button>
            <br/>
            <input onChange={(e) => setSearch(e.target.value)} />
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>modify</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {people
                        .filter(({ name }) => name.includes(search))
                        .map(({ name, age }, index) => (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>
                                    <button onClick={() => onModify(index)}>modify</button>
                                </td>
                                <td>
                                    <button onClick={() => onDelete(index)}>delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Join;
