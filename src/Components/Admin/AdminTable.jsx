import React from "react";
import { connect } from "react-redux";

function AdminTable(props) {
    const { data, totalData, changePage, changePageData, filter, num, curr_page } = props
    return (
        <div>
            table
        </div>
    );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminTable);