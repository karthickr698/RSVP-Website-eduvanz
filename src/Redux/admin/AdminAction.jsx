import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FILTER_DATA
} from '../ActionTypes';
import axios from 'axios';

const fetchUserDataRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    };
};

const fetchUserDataSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    };
};

const fetchUserDataFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error
    };
};

export const fetchUserData = () => dispatch => {
    dispatch(fetchUserDataRequest())
    return axios({
        method: 'GET',
        url: 'http://localhost:3000/user',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
        .then(res => dispatch(fetchUserDataSuccess(res.data)))
        .catch(err => dispatch(fetchUserDataFailure(err)))
}

export const filterData = (item) => {
    return {
        type: FILTER_DATA,
        payload: item,
    };
};