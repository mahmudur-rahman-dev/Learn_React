import {useState} from "react";
import './style.css';
import { Text } from './Text';
import { Task } from './Task';

export const Todo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleAddTask = () => {
        if(!input) return;

        const task = {
            id: list.length === 0 ? 1 : list[list.length-1].id + 1,
            name: input,
            completed: false
        }

        setList((prev) => [...prev, task]);
        setInput("");
    }

    const handleDeleteTask = (itemDelete) => {
        setList((prev) => prev.filter(item => item !== itemDelete));
    }


    const handleCompleteTask = (id) => {
        const updatedTaskList = list.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        });

        setList(updatedTaskList);
    }

    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <input onChange={handleInputChange} type="text" value={input}/>
                <div>
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            </div>

            <Task
                taskList={list}
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}
            />
        </div>
    );
}


export const TextShow = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div>
            <h1>Text</h1>
            <button onClick={() => setShowText(!showText)}>Show Text</button>
            {
                showText && <Text/>
            }
        </div>
    );

}
