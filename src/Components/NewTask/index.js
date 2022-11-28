import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./style.less"
import {taskController} from "../../api";
import dayjs from "dayjs";

export const NewTask = () => {
    const [date, setDate] = React.useState(new Date());
    const [description, setDescription] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [file, setFile] = React.useState({})
    const sendFiles = async () => {
        await taskController.postTask({
            date: dayjs(date).isValid() ? dayjs(date)?.toISOString() : null,
            description,
            title,
            file
        })
    }

    return (
        <div className="Modal">
            <div className="Modal-wrapper">
                <div className="Modal-wrapper-input">
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Название"
                    />
                </div>
                <div className="Modal-wrapper-input">
                    <input
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        type="text"
                        placeholder="Текст"
                    />
                </div>
                <div className="Modal-wrapper-input">
                    <input type="file"
                           onChange={e => {
                               const files = e.target.files
                               setFile(files[0])
                           }}/>
                </div>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                />
                <button type="submit" onClick={sendFiles}>Upload</button>
            </div>

        </div>

    );
};
