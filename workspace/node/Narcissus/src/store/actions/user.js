import { USER_LOGGED_IN,USER_LOGGED_OUT,USER_CREATE } from './actionTypes'


export const login = user => {
    return {
        type:USER_LOGGED_IN,
        payload: user
    }
}

export const create = user => {
    debugger
    return {
        type:USER_CREATE,
        payload: user
    }
}

export const logout = () => {
    return {
        type:USER_LOGGED_OUT
    }
}