import {useState} from "react"

export const Todo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleAddTask = () => {
        if(!input) return;
        setList((prev) => [...prev, input]);
        setInput("");
    }

    const handleDeleteTask = (itemDelete) => {
        setList((prev) => prev.filter(item => item !== itemDelete));
    }

    return (
        <div>
            <div>
                <input onChange={handleInputChange} type="text" value={input}/>
                <div>
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            </div>

            <div>
                {
                    list && list.length ?
                        list.map((item, index) => (
                            <div key={index}>
                                <h4>{item}</h4>
                                <button onClick={() => handleDeleteTask(item)}>Delete</button>
                            </div>
                        )) : <div><h3>No Data Found</h3></div>
                }
                {console.log(list)}
            </div>

        </div>
    );
}
