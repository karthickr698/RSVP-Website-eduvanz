import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FILTER_DATA,
    SEARCH_DATA

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
            }
            else if (target === "Sort Locality A-Z") {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.locality === b.locality ? 0 : a.locality < b.locality ? -1 : 1;
                });
            }
            else {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.locality === b.locality ? 0 : a.locality > b.locality ? -1 : 1;
                });
            }
            return {
                ...state,
                user_data: [...bookings],
            };
        }
        case SEARCH_DATA: {
            let pattern = (action.payload).toLowerCase();
            let filterArr = state.copyOfData.filter((ele) =>
                ele.name.toLowerCase().includes(pattern) || ele.locality.toLowerCase().includes(pattern)
            );
            if (pattern === "") {
                filterArr = state.copyOfData;
            }
            return {
                ...state,
                user_data: [...filterArr],
            };
        }
        default:
            return state;
    }
};

export default adminReducer;