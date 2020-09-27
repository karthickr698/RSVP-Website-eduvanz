import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Components/Home/Home';
import Register from '../Components/Register/Register'

class Routing extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/register" component={() => <Register />} />
                    <Route render={() => <div>404 Not Fount</div>} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Routing);