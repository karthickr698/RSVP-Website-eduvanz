import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../../Redux/admin/AdminAction'
class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchUserData()
    }
    render() {
        const { isloading, isError, user_data } = this.props
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
            <div>
                admin
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
