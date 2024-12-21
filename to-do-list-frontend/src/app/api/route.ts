import axios from "axios";

const URL = 'http://localhost:8000/';

export default {
    getTasks: function () {
        return axios.get(URL)
    },
    createTask: function (data: any) {
        return axios.post(URL + "task", data)
    },
    removeTask: function (id: string) {
        return axios.delete(URL + "task/" + id)
    }
}