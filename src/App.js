import './App.css';
import Accordian from "./components/accordian";
import Job from "./components/extra";

function App() {

    const data = [
        {
            name: "Mahmud",
            position: "Software Engineer",
            company: "Google"
        },
        {
            name: "Mashruru",
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
        <Job job={data}/>
    </div>
  );
}

export default App;
