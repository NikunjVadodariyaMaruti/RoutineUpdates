import React from 'react';
import {Route, withRouter, Switch, Link} from "react-router-dom";
import Header from '../components/header.js'
import Home from '../components/Home.js'
require('es6-promise').polyfill();
import '../../../scss/components/rootcomponents/app.scss'


export default class App extends React.Component {
    constructor(props) {
        super(props);
}
    render() {
        return(
  <div class="app">

    <Header />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

    );
  }

}

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;