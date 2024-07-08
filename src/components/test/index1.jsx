import {useState} from "react";
import data from "../accordian/data";
import '../accordian/style.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [mutiple, setMutiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...mutiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMutiple(cpyMultiple)
    }

    console.log(selected, mutiple);

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>{dataItem.id === selected ? "-" : "+"}</span>
                            </div>
                           {/* {
                                selected == dataItem.id ?
                                    <div className="content">{dataItem.answer}</div>
                                    : null
                            }*/}

                            {
                                enableMultiSelection ?
                                    mutiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                                    : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            }
                        </div>
                    ) : <div>No Data found</div>
            }
        </div>
    </div>
}