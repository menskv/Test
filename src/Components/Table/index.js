import React, {useEffect} from 'react';
import {useState} from "react";
import {NewTask} from "../NewTask";
import "./style.less"
import {taskController} from "../../api";

export const Table = () => {
    const [button, setButton] = useState(false)
    const [post, setPost] = useState({data: [
        {
        title: "zalupa", description:"xyi"
        }
        ]})
    useEffect(() => {
        taskController.getTask().then(res => setPost(res.data)).catch(console.error)

    }, [])

    function active() {
        setButton(true)
    }

    return (
        <div className="Wrapper">
            <div className="Wrapper-title">
                Тестовое задание
            </div>
            <div className="Wrapper-section">
                <div className="Wrapper-title-section">
                    <button onClick={active}>
                        Добавить таск
                    </button>
                    {button && <NewTask/>}
                </div>
                <div className="Wrapper-task-section">
                    {post.data.map((item, index, array)=>{
                        return <div style={{display: "flex", width: 200, justifyContent: "space-between"}}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};
