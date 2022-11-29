import {BaseController} from "./api";

export class TaskController extends BaseController {
    getTask() {
        return this.instance.get(`api/get-tasks`)
    }

    postTask(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })
        return this.instance.post(`api/post-task`, formData)
    }

    editTask(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })
        return this.instance.put(`api/put-task`,formData)
    }

    deleteTask(id) {
        return this.instance.delete(`api/delete-task`, {data:{id}})

    }
}
