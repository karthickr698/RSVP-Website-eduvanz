import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Admin from '../Admin/Admin'

export default class Home extends Component {
    render() {
        return (
            <div className=" p-3">
                <h2 className="text-center display-5">RSVP Meetup</h2>
                <ul className="nav">
                    <li
                        onClick={this.change}
                        name="home"
                        className="nav-item "
                        style={{ marginTop: "30px", fontSize: "20px" }}
                    >
                        <Link
                            onClick={this.change}
                            name="home"
                            to="/"
                            className="text-dark nav-link active"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mr-auto" style={{ marginTop: "30px", fontSize: "20px" }}>
                        <Link
                            onClick={this.change}
                            name="report"
                            to="/report"
                            className="nav-link text-dark"
                        >
                            Reports
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register">
                            <button
                                className="btn btn-dark"
                                style={{ marginTop: "30px" }}
                            >
                                Register
                        </button>
                        </Link>
                    </li>
                </ul>
                <hr />
                <Admin />
            </div>
        )
    }
}
