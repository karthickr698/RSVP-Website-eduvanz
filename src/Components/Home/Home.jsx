import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Link to="/register">Register</Link>
                <Link to="/report">Report</Link>
            </div>
        )
    }
}
