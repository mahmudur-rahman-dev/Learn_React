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

    function handleMultiSelect(getCurrentId) {
        let cpyMultiple = [...multiple];
        let findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);


        setMultiple(cpyMultiple)
    }


    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}> Enable Multi Select</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="item">
                            <div
                                onClick={enableMultiSelect ? () => handleMultiSelect(dataItem.id) : () => handleSingleSelect(dataItem.id)}
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>{
                                    enableMultiSelect
                                        ? multiple.indexOf(dataItem.id) !== -1
                                            ? "-"
                                            : "+"
                                        : selected === dataItem.id
                                            ? "-"
                                            : "+"
                                } </span>
                            </div>
                            {
                                enableMultiSelect ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div>
                                    : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            }
                        </div>
                    ) : <div>No Data Found</div>
            }
        </div>
    </div>
}