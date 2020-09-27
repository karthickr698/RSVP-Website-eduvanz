import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE

} from "../ActionTypes";

const initState = {
    isloading: false,
    user_data: [],
    isError: false
};

const adminReducer = (state = initState, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isloading: true
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isloading: false,
                isError: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isloading: false,
                user_data: action.payload
            };
        default:
            return state;
    }
};

export default adminReducer;