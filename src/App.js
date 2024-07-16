import './App.css';
import Accordian from "./components/accordian";
import {
    Job,
    AgeIncreaseCalc,
    HideUnhide,
    Counter,
} from "./components/extra";

import { Todo, TextShow } from "./components/todo";
import {UserInfo} from "./components/cat";

function App() {

    const data = [
        {
            name: "Mahmud",
            position: "Software Engineer",
            company: "Google"
        },
        {
            name: "Mashrur",
            position: "Data Science",
            company: "Apple"
        },
        {
            name: "Tauhid",
            position: "ML Engineer",
            company: "Amazon"
        },
    ]

    return (
        <div className="App">
            {/* Accordian component*/}
            {/*<Accordian/>*/}

            {/*External project work*/}
            {/*<Job job={data}/>*/}
            {/*<AgeIncreaseCalc/>*/}
            {/*<HideUnhide/>*/}
            {/*<Counter/>*/}
            {/*<h1>Hello world</h1>*/}
            {/*<Todo/>*/}
            {/*<TextShow/>*/}
            <UserInfo/>
        </div>
    );
}

export default App;
