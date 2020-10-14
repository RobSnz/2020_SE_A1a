import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Home from "./Home/Home";
import history from './history';
import Submit from "./Submit/Submit";
import Results from "./Results/Results";
import Moderate from "./Moderate/Moderate";
import Analyst from "./Analyst/Analyst";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Submit" component={Submit} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Results" component={Results} />
                    <Route path="/Moderate" component={Moderate} />
                    <Route path="/Analyst" component={Analyst} />
                </Switch>
            </Router>
        )
    }
}