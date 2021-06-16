import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import Loader from 'react-loader-spinner';
import Layout from './components/Layout/Layout';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage.js' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage.js' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage.js' /* webpackChunkName: "contacts-page" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
      <Layout>
        <Suspense
          fallback={
            <Loader
              type="BallTriangle"
              color="#e1e2ed"
              height={60}
              width={60}
              className="loader"
            />
          }
        >
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.login}
            />
            <PublicRoute component={HomePage} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onRefresh: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
