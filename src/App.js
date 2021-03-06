import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
// Lazy loader
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
// Containers
import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/home" exact component={Home} />
          {this.props.location.pathname !== '/home' && <Redirect to="/home" />}
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
