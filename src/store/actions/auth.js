import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,        
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')   
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSignedUp) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'http://localhost:3000/login'
        if (!isSignedUp) {
            url = 'http://localhost:3000/register'
        }
        axios.post(url,authData)
             .then(response => {
                console.log(response)
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('expirationTime', expirationDate)
                dispatch(authSuccess(response.data.token))
                dispatch(checkAuthTimeout(response.data.expiresIn))
             })
             .catch(err => {
                dispatch(authFail(err.response.data.message))
             })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'))
            if(expirationTime <= new Date()){
                 dispatch(logout())
            }
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime())/1000))
        }
    }
}