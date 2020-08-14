import { FETCH_USER, LOGIN_USER } from "../actions/types";

export default function(state = null, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_USER:
            console.log(action.payload);
            return action.payload || false;
        case LOGIN_USER:
            console.log(action.payload);
            return action.payload.user || false;
        default:
            return state;
    }
}