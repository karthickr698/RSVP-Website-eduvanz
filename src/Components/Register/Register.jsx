import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../Redux/User/UserAction'
import { Redirect } from 'react-router-dom'
import styles from './Register.module.css';
import swal from 'sweetalert'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            dob: "",
            profession: "",
            locality: "",
            guests: "",
            address: "",
            address_chars_left: 50,
            isCancel: false
        }
    }

    handleChange = (e) => {
        if (e.target.name === "address")
            this.setState({ address_chars_left: (50 - e.target.value.length) })
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCancel = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to save the data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({ isCancel: true })
                }
            });
    }

    handleSubmit = () => {
        console.log(this.state)
        this.props.registerUser(this.state)

    }

    render() {
        const { isSignUp, isSignUpErrorMessage, user_data } = this.props
        console.log(user_data)
        console.log(this.state)
        if (isSignUp) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else if (this.state.isCancel || user_data.length > 0) {
            return (
                <Redirect to='/' />
            )
        }
        else {
            return (
                <>
                    <div className={styles.header}>
                        Sign Up
                    </div>
                    <div className={styles.register}>
                        <div className={styles.registerCont}>
                            <div className={styles.registersubCont}>
                                <label className={styles.registerLabel}>Name*</label>
                                <input
                                    placeholder="Name"
                                    className={styles.inputTag}
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleChange}
                                />
                                <label className={styles.registerLabel}>Age*</label>
                                <input
                                    placeholder="Age"
                                    className={styles.inputTag}
                                    value={this.state.age}
                                    name="age"
                                    onChange={this.handleChange}
                                    type="number"
                                />
                                <label className={styles.registerLabel}>D.O.B*</label>
                                <input
                                    placeholder="DOB"
                                    className={styles.inputTag}
                                    value={this.state.dob}
                                    name="dob"
                                    type="date"
                                    onChange={this.handleChange}
                                />
                                <label className={styles.registerLabel}>Profession*</label>
                                <select className={styles.inputTag} onChange={this.handleChange} name="profession">
                                    <option defaultValue>Select Profession</option>
                                    <option vlaue="employled">Employled</option>
                                    <option value="student">Student</option>
                                </select>
                                <label className={styles.registerLabel}>Locality*</label>
                                <input
                                    placeholder="Locality"
                                    className={styles.inputTag}
                                    value={this.state.locality}
                                    name="locality"
                                    onChange={this.handleChange}
                                />
                                <label className={styles.registerLabel}>Number of Guests*</label>
                                <select className={styles.inputTag} onChange={this.handleChange}
                                    name="guests"
                                >
                                    <option defaultValue>Select Number of Guests</option>
                                    <option value={0}>0</option>
                                    <option vlaue={1}>1</option>
                                    <option value={2}>2</option>
                                </select>
                                <label className={styles.registerLabel}>Address*</label>
                                <textarea
                                    className="form-control"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    maxLength='50'
                                >
                                </textarea>
                                <small style={{ textAlign: "right" }}>Number of characters Left : {this.state.address_chars_left}</small>
                                <div className={styles.buttons}>
                                    <div>
                                        <button className={styles.registerBtn} onClick={this.handleCancel}>
                                            Cancel
                                        </button>
                                    </div>
                                    <div>
                                        <button className={styles.registerBtn} onClick={this.handleSubmit}>
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {isSignUpErrorMessage.length > 0 ? <div style={{ color: "blue", fontWeight: "bold" }}>{isSignUpErrorMessage.message}</div> : null}
                        </div>
                    </div>
                </>
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
