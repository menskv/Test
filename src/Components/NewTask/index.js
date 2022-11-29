import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {taskController} from "../../api";
import dayjs from "dayjs";
import "./style.css"

function Modal({ children, shown, close }) {
    return shown ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            <div
                className="modal-content"
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                <button onClick={close}>Close</button>
                {children}
            </div>
        </div>
    ) : null;
}


export const NewTask = (props) => {
    const [date, setDate] = React.useState(new Date());
    const [description, setDescription] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [file, setFile] = React.useState({})
    const [modalShown, setModal] = React.useState(false);

    const sendFiles = async () => {
        try {
            const id = Math.floor(Math.random() * 100)
            const response = await taskController.postTask({
                date: dayjs(date).isValid() ? dayjs(date)?.toISOString() : null,
                description,
                title,
                file,
                id
            })
            props.setPost(response.data)
        } catch (e) {
            console.log(sendFiles)
        }
    }
    return (
        <>
        <button onClick={() => setModal(true)}>Добавить таск</button>
            <Modal shown={modalShown} close={() =>{
                setModal(false)
            }}>
                <div className="modal-backdrop">
                    <div className="modal-wrapper">
                        <div className="modal-wrapper-input">
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Название"
                            />
                        </div>
                        <div className="modal-wrapper-input">
                            <input
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                type="text"
                                placeholder="Текст"
                            />
                        </div>
                        <div className="modal-wrapper-input">
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
                        <button type="submit"
                                onClick={sendFiles}
                        >
                            Загрузить
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
