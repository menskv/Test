import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        common: {
            Accept: 'application/json',
        },
    }
});

export class BaseController {
    instance = axiosInstance
}