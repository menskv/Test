import React from 'react';
import {taskController} from "../../api";
import {Button} from "../Button";

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
            <Button onClick={() => setShow(!show)}>Редактировать</Button>
            {
                show && <div style={{ display: "flex", flexDirection: "column", position: "absolute" }}>
                    <input onChange={setValue("title")} value={form.title} type="text" />
                    <input onChange={setValue("description")} value={form.description} type="text" />
                    <Button onClick={update()}>update</Button>
                </div>
            }
        </div>
    );
};

