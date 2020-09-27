import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getAllReports } from "../../Redux/ReportData/ReportAction";
import { Pie, Bar } from "react-chartjs-2";

import styles from "./Report.module.css";

const pieChartDataAgeGroup = {
  labels: ["13-18", "19-25", "above 25"],
  datasets: [
    {
      label: "Age Group",
      backgroundColor: ["#2FDE00", "#00A6B4", "#6800B4"],
      data: [0, 0, 0],
    },
  ],
};

const pieChartDataProfGroup = {
  labels: ["Student", "Employee"],
  datasets: [
    {
      label: "Profession Group",
      backgroundColor: ["#f6546a", "#a96e71"],
      data: [0, 0],
    },
  ],
};

const barChartDataLocalityGroup = {
  labels: [],
  datasets: [
    {
      label: "Locality Group",
      backgroundColor: "#d6893a",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [],
    },
  ],
};

const barChartDataGuestGroup = {
  labels: ["0 - Guests", "1 - Guests", "2 - Guests"],
  datasets: [
    {
      label: "Guest Group",
      backgroundColor: "#2bfe72",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [],
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
      localities,
      guest0Count,
      guest1Count,
      guest2Count,
      avgGuestCount,
    } = this.props;
    pieChartDataAgeGroup.datasets[0].data = [
      count13_to_18,
      count19_to_25,
      countAb25,
    ];
    barChartDataLocalityGroup.labels = Object.keys(localities);
    barChartDataLocalityGroup.datasets[0].data = Object.values(localities);
    pieChartDataProfGroup.datasets[0].data = [studentCount, employeeCount];
    barChartDataGuestGroup.datasets[0].data = [
      guest0Count,
      guest1Count,
      guest2Count,
    ];
    barChartDataGuestGroup.datasets[0].label = `Average group size of people attending the event ${avgGuestCount}%`;
    return (
      <React.Fragment>
        <div className="text-center" >
          <Link to="/">
            <button className="btn btn-lg btn-secondary font-weight-bold" style={{ width: "400px" }}>Go To Home</button>
          </Link>
        </div>
        <h6 className="text-center">(Click on the Chart Label to filter)</h6>
        <div className={styles.pieChartCont}>
          <div className={styles.pieChartHolder}>
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
          </div>
          <div className={styles.pieChartHolder}>
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
          </div>
        </div>
        <div className={styles.barChartCont}>
          <div className={styles.barChartHolder}>
            <Bar
              data={barChartDataLocalityGroup}
              options={{
                title: {
                  display: true,
                  text: "Number of people by localities",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
              }}
            />
          </div>
          <div className={styles.barChartHolder}>
            <Bar
              data={barChartDataGuestGroup}
              options={{
                title: {
                  display: true,
                  text: "Number of guests",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
              }}
            />
          </div>
        </div>
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
  localities: state.report.localities,
  guest0Count: state.report.guest0Count,
  guest1Count: state.report.guest1Count,
  guest2Count: state.report.guest2Count,
  avgGuestCount: state.report.avgGuestCount,
});

const mapDispatchToProps = (dispatch) => ({
  getAllReports: () => dispatch(getAllReports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
