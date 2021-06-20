import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';
import Loader from 'react-loader-spinner';
import Layout from './components/Layout/Layout';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import { Home } from '@material-ui/icons';

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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

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
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            LoginPage
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Layout>
  );
}
