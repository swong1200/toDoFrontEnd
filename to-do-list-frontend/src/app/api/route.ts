import axios from "axios";

const URL = 'http://localhost:8000/';

export default {
    getTasks: function () {
        return axios.get(URL)
    }
}