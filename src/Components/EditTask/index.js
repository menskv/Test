import React from 'react';
import {taskController} from "../../api";

export const EditTask = (props) => {
    const [show, setShow] = React.useState(false)
    const [form, setForm] = React.useState(props.values)
    const setValue = (key) => (event) => {
        setForm({ ...form, [key]: event.target.value })
    }
    const update = () => (event) => {
        taskController.editTask(form).then(res => props.setPost(res.data))
        console.log("123")
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>Редактировать</button>
            {
                show && <div style={{ display: "flex", flexDirection: "column" }}>
                    <input onChange={setValue("title")} value={form.title} type="text" />
                    <input onChange={setValue("description")} value={form.description} type="text" />
                    <button onClick={update()}>update</button>
                </div>
            }
        </div>
    );
};

