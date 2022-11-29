import React from "react";
import {taskController} from "../../api";
import {NewTask} from "../NewTask";
import {EditTask} from "../EditTask";
import "./style.css"
import {Button} from "../Button";

export const Table = () => {
    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        taskController.getTask().then(res => setPost(res.data))
    }, [])

    function deleteTask(id) {
        return () => {
            taskController.deleteTask(id).then(res => setPost(res.data))
        }
    }


    return (
        <div className="modal">
            <div className="modal-title">
                <span>Тестовое задание</span>
                <div className="modal-content">
                    <NewTask
                        post={post}
                        setPost={setPost}
                    />
                    <ul className="list">
                        {post?.map((item, index, array) => {
                            return <li className="list-item"
                                       key={`${item.title}${item.description}${item.delete}${item.edit}${index}`}
                                       style={{
                                           display: "flex",
                                           width: 500,
                                           justifyContent: "space-between",
                                           marginBottom: 20
                                       }}>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                                <Button onClick={deleteTask(item.id)}>Удалить
                                </Button>
                                <EditTask
                                    setPost={setPost}
                                    values={item}
                                />
                            </li>
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
};
