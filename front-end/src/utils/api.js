import axios from 'axios';

export default function () {

    return axios.create({
        baseURL: "api",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}