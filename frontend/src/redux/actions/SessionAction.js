import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './Actions'

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

export const logoutCurrentUser = ()  => ({
    type: LOGOUT_CURRENT_USER,
    user: undefined,
})