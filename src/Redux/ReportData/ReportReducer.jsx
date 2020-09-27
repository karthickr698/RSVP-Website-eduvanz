import { REPORT_REQUEST, REPORT_SUCCESS, REPORT_FAILURE } from "../ActionTypes";

const initState = {
  isError: false,
  report_data: [],
  isReportLoading: false,
  reportErrorMessage: "",
  count13_to_18: 0,
  count19_to_25: 0,
  countAb25: 0,
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
      const { payload = [] } = action;
      let count13 = 0,
        count18 = 0,
        count25 = 0;
      payload.forEach((user) => {
        const { age } = user;
        if (age >= 13 && age <= 18) {
          count13++;
        } else if (age >= 19 && age <= 25) {
          count18++;
        } else {
          count25++;
        }
      });
      return {
        ...state,
        isReportLoading: false,
        report_data: payload,
        count13_to_18: count13,
        count19_to_25: count18,
        countAb25: count25,
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
