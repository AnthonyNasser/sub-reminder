import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/Actions'

const defaultState = {
    userId: null,
    firstName: null,
    lastName: null,
    token: null,
}

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user
        case LOGOUT_CURRENT_USER:
            return defaultState
        default:
            return state
    }
}

export default SessionReducer