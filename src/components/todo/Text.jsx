import {useState, useEffect} from "react";



export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("Text component mounted");
        return () => {
            console.log("Text component unmounted");
        }
    });

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} type="text" value={text}/>
            <h3>{text}</h3>
        </div>
    );
}