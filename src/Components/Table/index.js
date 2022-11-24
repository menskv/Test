import React from 'react';
import {useState} from "react";
import {NewTask} from "../NewTask";

export const Table = () => {

    const [button, setButton] = useState(false)

    function active(){
        setButton(true)
    }
    return (
        <div className="Wrapper">
            <div className="Title">
                Тестовое задание
            </div>
            <div className="Section">
                <div className="title-section">
                    <button onClick={active}>

                        Добавить таск
                    </button>
                    {button && <NewTask/>}
                </div>
                <div className="task-section">
                </div>
            </div>
        </div>
    );
};
