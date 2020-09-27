import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Admin from '../Admin/Admin'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Admin />
                <Link to="/register">Register</Link>
                <Link to="/report">Report</Link>
            </div>
        )
    }
}
