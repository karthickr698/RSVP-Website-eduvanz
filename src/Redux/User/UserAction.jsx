import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../ActionTypes';
import axios from 'axios';

const requestRegister = () => {
    return {
        type: REGISTER_REQUEST
    };
};

const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    };
};

const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        error
    };
};

export const registerUser = payload => dispatch => {
    dispatch(requestRegister())
    return axios({
        method: 'POST',
        url: 'http://localhost:3000/user',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        data: payload
    })
        .then(res => dispatch(registerSuccess(res.data)))
        .catch(err => dispatch(registerFailure(err)))
}