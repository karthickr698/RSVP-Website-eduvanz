import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../../Redux/admin/AdminAction'
import AdminTable from './AdminTable'
import { searchData } from '../../Redux/admin/AdminAction'


class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNo: 1,
            noOfData: 6,
            search: ""
        }
    }

    changePageData = (num) => {
        this.setState({ noOfData: num })
    };

    changePage = (num) => {
        this.setState({ pageNo: num })
    };

    changeHandler = e => {
        this.setState({ search: e.target.value })
        this.props.searchData(e.target.value)

    };

    componentDidMount() {
        this.props.fetchUserData()
    }
    render() {
        const { isloading, isError, user_data } = this.props
        const { noOfData, pageNo, search } = this.state
        let indexPrevData = Math.floor((pageNo - 1) * noOfData)
        let indexCurrData = pageNo * noOfData
        if (isloading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else if (isError) {
            return (
                <div>
                    Some Error has been occured
                </div>
            )
        }
        else {

            return (
                <div >
                    <div data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" >
                        <div className="col-md-5 m-auto p-4">
                            <input
                                style={{ textAlign: "center" }}
                                className="form-control"
                                placeholder="search user by name or locality "
                                value={search}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="col-md-10 m-auto p-4">
                            <h2 className="text-center pb-3">All Users</h2>
                            <AdminTable
                                data={user_data.slice(indexPrevData, indexCurrData)}
                                totalData={user_data}
                                changePage={this.changePage}
                                num={noOfData}
                                changePageData={this.changePageData}
                                curr_page={pageNo}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    isloading: state.admin.isloading,
    user_data: state.admin.user_data,
    isError: state.admin.isError

})

const mapDispatchToProps = dispatch => ({
    fetchUserData: () => dispatch(fetchUserData()),
    searchData: (payload) => dispatch(searchData(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
