import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Report from "../Components/Report/Report";

export default class Routing extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/report" component={Report} />
                    <Route render={() => <div>404 Not Fount</div>} />
                </Switch>
            </>
        );
    }
}
