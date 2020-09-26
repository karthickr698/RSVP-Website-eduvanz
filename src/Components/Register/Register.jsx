import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../Redux/User/UserAction'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { isSignUp, isSignUpErrorMessage, user } = this.props
        if (isSignUp) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else {
            return (
                <div>
                    Register
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    isSignUp: state.user.isSignUp,
    isSignUpErrorMessage: state.user.isSignUpErrorMessage,
    user_data: state.user.user_data
})

const mapDispatchToProps = dispatch => ({
    registerUser: (payload) => dispatch(registerUser(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);
