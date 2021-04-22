import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`
    }

    return req
})

export const signIn = (formData) =>
    API.post('/user/signin', formData).then((res) => {
        return res
    })
export const signUp = (formData) =>
    API.post('/user/signup', formData).then((res) => {
        return res
    })
export const gSignIn = (formData) =>
    API.post('/user/gSignin', formData).then((res) => {
        return res
    })
