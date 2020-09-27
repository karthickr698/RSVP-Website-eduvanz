import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FILTER_DATA

} from "../ActionTypes";

const initState = {
    isloading: false,
    user_data: [],
    copyOfData: [],
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
                user_data: action.payload,
                copyOfData: action.payload
            };
        case FILTER_DATA: {
            let target = action.payload;
            console.log(target)
            let bookings = [];
            if (target === "Show All") {
                bookings = state.copyOfData;
            }
            else if (target === "Sort Name A-Z") {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
                });
            }
            else if (target === "Sort Name Z-A") {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.name === b.name ? 0 : a.name > b.name ? -1 : 1;
                });
                console.log(bookings)
            }
            else if (target === "Sort Locality A-Z") {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.locality === b.locality ? 0 : a.locality < b.locality ? -1 : 1;
                });
                console.log(bookings)
            }
            else {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.locality === b.locality ? 0 : a.locality > b.locality ? -1 : 1;
                });
                console.log(bookings)
            }
            return {
                ...state,
                user_data: [...bookings],
            };
        }
        default:
            return state;
    }
};

export default adminReducer;