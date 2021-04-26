import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)
        if (Object.keys(data).length == 1) return data.message
        else {
            dispatch({ type: AUTH, data })
            // console.log(data.result._id)
            router.push('/dashboard')
        }
    } catch (error) {
        return error
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        var { data } = await api.signUp(formData)
        if (Object.keys(data).length == 1) return data.message
        else {
            dispatch({ type: AUTH, data })
            router.push('/auth')
        }
    } catch (error) {
        return error
    }
}

export const gSignin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.gSignIn(formData)
        if (Object.keys(data).length == 1) return data.message
        else {
            dispatch({ type: AUTH, data })
            router.push('/dashboard')
        }
    } catch (error) {
        return error
    }
}
