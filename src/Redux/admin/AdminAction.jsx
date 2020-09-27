import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
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

export const fetchUserData = payload => dispatch => {
    dispatch(fetchUserDataRequest())
    return axios({
        method: 'POST',
        url: 'http://localhost:3000/user',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        data: payload
    })
        .then(res => dispatch(fetchUserDataSuccess(res.data)))
        .catch(err => dispatch(fetchUserDataFailure(err)))
}