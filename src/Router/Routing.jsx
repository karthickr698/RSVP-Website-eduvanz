import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Report from "../Components/Report/Report";

class Routing extends Component {
<<<<<<< HEAD
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/register" component={() => <Register />} />
                    <Route render={() => <div>404 Not Fount</div>} />
                </Switch>
            </>
        )
    }
=======
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
>>>>>>> temp
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
