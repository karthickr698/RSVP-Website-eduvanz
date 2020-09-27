import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllReports } from "../../Redux/ReportData/ReportAction";
import { Pie } from "react-chartjs-2";

const pieChartDataAgeGroup = {
  labels: ["13-18", "19-25", "above 25"],
  datasets: [
    {
      label: "Age Group",
      backgroundColor: ["#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: ["#501800", "#4B5000", "#35014F"],
      data: [0, 0, 0],
    },
  ],
};

const pieChartDataProfGroup = {
  labels: ["Student", "Employee"],
  datasets: [
    {
      label: "Profession Group",
      backgroundColor: ["#2FDE00", "#00A6B4"],
      hoverBackgroundColor: ["#501800", "#4B5000"],
      data: [0, 0],
    },
  ],
};

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllReports();
  }

  render() {
    const {
      count13_to_18,
      count19_to_25,
      countAb25,
      studentCount,
      employeeCount,
    } = this.props;
    pieChartDataAgeGroup.datasets[0].data = [
      count13_to_18,
      count19_to_25,
      countAb25,
    ];
    pieChartDataProfGroup.datasets[0].data = [studentCount, employeeCount];
    return (
      <React.Fragment>
        <Pie
          data={pieChartDataAgeGroup}
          options={{
            title: {
              display: true,
              text:
                "Number of people in a given age range (13-18, 19-25 and 25+)",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <Pie
          data={pieChartDataProfGroup}
          options={{
            title: {
              display: true,
              text: "Professionals & students count",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isError: state.report.isError,
  report_data: state.report.report_data,
  isReportLoading: state.report.isReportLoading,
  reportErrorMessage: state.report.reportErrorMessage,
  count13_to_18: state.report.count13_to_18,
  count19_to_25: state.report.count19_to_25,
  countAb25: state.report.countAb25,
  studentCount: state.report.studentCount,
  employeeCount: state.report.employeeCount,
});

const mapDispatchToProps = (dispatch) => ({
  getAllReports: () => dispatch(getAllReports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
