import { REPORT_REQUEST, REPORT_SUCCESS, REPORT_FAILURE } from "../ActionTypes";
import axios from "axios";

const requestReport = () => {
  return {
    type: REPORT_REQUEST,
  };
};

const ReportSuccess = (payload) => {
  return {
    type: REPORT_SUCCESS,
    payload,
  };
};

const ReportFailure = (error) => {
  return {
    type: REPORT_FAILURE,
    error,
  };
};

export const getAllReports = () => (dispatch) => {
  dispatch(requestReport());
  return axios({
    method: "GET",
    url: "http://localhost:3000/reportData",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => dispatch(ReportSuccess(res.data)))
    .catch((err) => dispatch(ReportFailure(err)));
};
