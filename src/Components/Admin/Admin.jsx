import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../../Redux/admin/AdminAction'
import AdminTable from './AdminTable'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNo: 1,
            noOfData: 6,
            indexPrevData: Math.floor((this.state.pageNo - 1) * this.state.noOfData),
            indexCurrData: this.state.pageNo * this.state.noOfData,
            dataToShow: this.props.user_data.slice(this.state.indexPrevData, this.state.indexCurrData),
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
    };

    componentDidMount() {
        this.props.fetchUserData()
    }
    render() {
        const { isloading, isError, user_data } = this.props
        const { dataToShow, noOfData, pageNo, search } = this.state
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
        return (
            <div >
                <div data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" >
                    <div className="col-md-5 m-auto p-4">
                        <input
                            style={{ textAlign: "center" }}
                            className="form-control"
                            placeholder="search Restaurants "
                            value={search}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="col-md-10 m-auto p-4">
                        <h2 className="text-center pb-3">All Restaurants</h2>
                        <AdminTable
                            data={dataToShow}
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

const mapStateToProps = state => ({
    isloading: state.admin.isloading,
    user_data: state.admin.user_data,
    isError: state.admin.isError

})

const mapDispatchToProps = dispatch => ({
    fetchUserData: () => dispatch(fetchUserData())
})


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
