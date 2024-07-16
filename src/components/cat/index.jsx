import {useState, useEffect} from "react";
import Axios from "axios";

export const UserInfo = () => {
    const [input, setInput] = useState("");
    const [userInfo, setUserInfo] = useState(null);


    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${input}`)
            .then((res) => {
                setUserInfo(
                    {
                        name: res.data.name,
                        age: res.data.age,
                        count: res.data.count
                    }
                )
                setInput("")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            fetchData();
        }
    };

    return (
        <div>
            <h1>Find User Information</h1>
            <input type="text"
                   placeholder="EX. Pedro"
                   value={input}
                   onChange={(event) => setInput(event.target.value)}
                   onKeyPress={handleKeyPress}
            /> <br/>
            <button onClick={fetchData}>Get User Info</button>

            <div>
                <h3>Name: {userInfo?.name}</h3>
                <h3>AGE: {userInfo?.age}</h3>
                <h3>Count: {userInfo?.count}</h3>
            </div>
        </div>
    );
}