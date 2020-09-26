import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE

} from "../ActionTypes";

const initState = {
    isSignUp: false,
    user_data: [],
    isSignUpErrorMessage: ""
};

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isSignUp: true
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isSignUp: false,
                isSignUpErrorMessage: action.error
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSignUp: false,
                user_data: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;