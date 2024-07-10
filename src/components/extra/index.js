import React, {useState} from 'react';

export const Job = (props) => {
    const {job} = props;

    return (
        <div>
            {
                job ? job.map((item, index) =>
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <p>{item.position}</p>
                        <p>{item.company}</p>

                    </div>
                ) : <div>No Data found</div>
            }
        </div>
    );
}

export const AgeIncreaseCalc = () => {
    const [age, setAge] = useState(0);
    const [text, setText] = useState("");

    const increaseAge = () => {
        setAge(age + 1);
    }

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <button onClick={increaseAge}>Increase Age</button>
            <h1>Age: {age}</h1><br/>
            <input type="text" onChange={handleInputChange}/> <br/>
            {text}
        </div>
    );
}

export const HideUnhide = () => {
    const [hide, setHide] = useState(false);
    return (
        <div>
            <button onClick={() => setHide(!hide)}>Hide/Unhide</button>
            {!hide && <h1>Promise</h1>}
        </div>
    );
}

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount(count + 1)
    }

    const handleDecreaseCount = () => {
        setCount(count - 1)
    }

    const handleResetCount = () => {
        setCount(0)
    }

    const updateCount = (action) => {
        setCount((prevCount) => {
            switch (action) {
                case 'increase':
                    return prevCount + 1;
                case 'decrese':
                    return prevCount - 1;
                case 'reset':
                    return 0;
                default:
                    return prevCount
            }
        })
    }

    return (
        <div>
            <div>
                <button onClick={() => updateCount('increase')}>Increase</button>
                <button onClick={() => updateCount('decrese')}>Decrease</button>
                <button onClick={() => updateCount('reset')}>Reset to Zero</button>
            </div>
            <div style={{color: "red"}}>
                {count}
            </div>
        </div>
    );
}