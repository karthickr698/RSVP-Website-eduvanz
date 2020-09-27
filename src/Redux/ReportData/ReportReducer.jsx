import { REPORT_REQUEST, REPORT_SUCCESS, REPORT_FAILURE } from "../ActionTypes";

const initState = {
  isError: false,
  report_data: [],
  isReportLoading: false,
  reportErrorMessage: "",
  count13_to_18: 0,
  count19_to_25: 0,
  countAb25: 0,
  studentCount: 0,
  employeeCount: 0,
  guest0Count: 0,
  guest1Count: 0,
  guest2Count: 0,
  avgGuestCount: 0,
  localities: {},
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
        count25 = 0,
        employeeCount = 0,
        studentCount = 0,
        guest0Count = 0,
        guest1Count = 0,
        guest2Count = 0,
        totalGuests = 0,
        usersCount = 0,
        localities = {};
      payload.forEach((user) => {
        const { age, profession, locality, guests } = user;
        if (age >= 13 && age <= 18) {
          count13++;
        } else if (age >= 19 && age <= 25) {
          count18++;
        } else {
          count25++;
        }
        if (profession === "employed") {
          employeeCount++;
        } else {
          studentCount++;
        }
        if (guests === 0) {
          guest0Count++;
        } else if (guests === 1) {
          guest1Count++;
        } else {
          guest2Count++;
        }
        totalGuests += guests;
        usersCount++;
        localities[locality] =
          localities[locality] !== undefined ? localities[locality] + 1 : 0;
      });
      return {
        ...state,
        isReportLoading: false,
        report_data: payload,
        count13_to_18: count13,
        count19_to_25: count18,
        countAb25: count25,
        studentCount: employeeCount,
        employeeCount: studentCount,
        guest0Count: guest0Count,
        guest1Count: guest1Count,
        guest2Count: guest2Count,
        avgGuestCount: totalGuests / usersCount,
        localities: localities,
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
