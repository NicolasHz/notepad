import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
// Lazy loader
import asyncComponent from './hoc/asyncComponent/asyncComponent';
// Containers
import Layout from './hoc/layout/Layout';

const asyncHome = asyncComponent(() => {
  return import('./containers/home/Home');
});

class App extends Component {
  render() {
    const redirect = (this.props.location.pathname === '/home' ? null : <Redirect to="/home" />)
    return (
      <Layout>
        <Route path="/home" exact component={asyncHome} />
        {redirect}
      </Layout>
    );
  }
}

export default withRouter(App);
