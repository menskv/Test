import {BaseController} from "./api";

export class TaskController extends BaseController {
    getTask() {
        return this.instance.get(`api/get_all`)
    }

    postTask(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })
        return this.instance.post(`api/create`, formData)
    }

    editTask() {

    }

    deleteTask() {

    }
}