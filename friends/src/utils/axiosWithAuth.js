import axios from 'axios'

export function axiosWithAuth() {
    return axios.create({
        headers: {
            authorization: localStorage.getItem('token'),
        },
    })
}