import { REPORT_REQUEST, REPORT_SUCCESS, REPORT_FAILURE } from "../ActionTypes";

const initState = {
  isError: false,
  report_data: [],
  isReportLoading: false,
  reportErrorMessage: "",
};

const reportReducer = (state = initState, action) => {
  switch (action.type) {
    case REPORT_REQUEST:
      return {
        ...state,
        isError: false,
        isReportLoading: true,
        report_data: [],
        reportErrorMessage: "",
      };
    case REPORT_SUCCESS:
      return {
        ...state,
        isReportLoading: false,
        report_data: action.payload,
      };
    case REPORT_FAILURE:
      return {
        ...state,
        isError: true,
        isReportLoading: false,
        reportErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default reportReducer;
