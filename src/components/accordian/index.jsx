import {useState} from "react";
import data from "./data";
import './style.css';


export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelect(getCurrentId) {
        setSelected(selected === getCurrentId ? null : getCurrentId)
    }


    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="item">
                            <div onClick={() => handleSingleSelect(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>{selected === dataItem.id ? "-" : "+"}</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                    <div className="content">{dataItem.answer}</div>
                                    : null
                            }
                        </div>
                    ) : <div>No Data Found</div>
            }
        </div>
    </div>
}